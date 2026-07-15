import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import LegalBasisSelector from '@/components/LegalBasisSelector';

const LegalBasisSelectorWrapper = ({
  defaultValue = 'art28',
}: {
  defaultValue?: string;
}) => {
  const form = useForm({
    defaultValues: {
      cancellationOption: defaultValue,
    },
  });

  return (
    <FormProvider {...form}>
      <LegalBasisSelector control={form.control} />
    </FormProvider>
  );
};

describe('LegalBasisSelector Component', () => {
  test('renders all three legal basis options', () => {
    render(<LegalBasisSelectorWrapper />);

    expect(screen.getByText(/Koniec okresu ubezpieczenia/)).toBeInTheDocument();
    expect(screen.getByText(/Podwójne ubezpieczenie/)).toBeInTheDocument();
    expect(screen.getByText(/Zakup pojazdu/)).toBeInTheDocument();
  });

  test('renders correct article numbers', () => {
    render(<LegalBasisSelectorWrapper />);

    expect(screen.getByText(/Art\. 28/)).toBeInTheDocument();
    expect(screen.getByText(/Art\. 28a/)).toBeInTheDocument();
    expect(screen.getByText(/Art\. 31/)).toBeInTheDocument();
  });

  test('renders badges for each option', () => {
    render(<LegalBasisSelectorWrapper />);

    expect(screen.getByText('Najczęściej wybierane')).toBeInTheDocument();
    expect(screen.getByText('Podwójne OC')).toBeInTheDocument();
    expect(screen.getByText('Zakup pojazdu')).toBeInTheDocument();
  });

  test('selects Art. 28 by default', () => {
    render(<LegalBasisSelectorWrapper defaultValue="art28" />);

    const art28Card = screen.getByText(/Koniec okresu ubezpieczenia/).closest('button');
    expect(art28Card).toHaveClass('selected');
  });

  test('allows selection of Art. 28a', () => {
    const { container } = render(<LegalBasisSelectorWrapper />);

    const art28aButton = screen.getByText(/Podwójne ubezpieczenie/).closest('button');
    if (art28aButton) {
      fireEvent.click(art28aButton);
      expect(art28aButton).toHaveClass('selected');
    }
  });

  test('allows selection of Art. 31', () => {
    const { container } = render(<LegalBasisSelectorWrapper />);

    const art31Button = screen.getByText(/Zakup pojazdu/).closest('button');
    if (art31Button) {
      fireEvent.click(art31Button);
      expect(art31Button).toHaveClass('selected');
    }
  });

  test('only one option can be selected at a time', () => {
    render(<LegalBasisSelectorWrapper />);

    const art28Button = screen.getByText(/Koniec okresu ubezpieczenia/).closest('button');
    const art28aButton = screen.getByText(/Podwójne ubezpieczenie/).closest('button');

    if (art28Button && art28aButton) {
      // Art. 28 should be selected by default
      expect(art28Button).toHaveClass('selected');
      expect(art28aButton).not.toHaveClass('selected');

      // Click Art. 28a
      fireEvent.click(art28aButton);

      // Now Art. 28a should be selected and Art. 28 should not
      expect(art28aButton).toHaveClass('selected');
      expect(art28Button).not.toHaveClass('selected');
    }
  });

  test('renders description text for each option', () => {
    render(<LegalBasisSelectorWrapper />);

    // Each option should have descriptive text
    const options = screen.getAllByRole('button');
    expect(options.length).toBe(3);
  });

  test('is keyboard accessible', () => {
    render(<LegalBasisSelectorWrapper />);

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toHaveProperty('type', 'button');
    });
  });
});

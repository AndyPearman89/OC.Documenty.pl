import { z } from 'zod';

// Test schema validation
const ownerSchema = z.object({
  ownerName: z.string().min(2, 'Min 2 chars'),
  pesel: z.string().length(11, 'Must be 11 digits'),
  phone: z.string().optional(),
});

describe('Owner Validation', () => {
  test('Valid owner data passes', () => {
    const data = { ownerName: 'Jan Kowalski', pesel: '12345678901' };
    expect(() => ownerSchema.parse(data)).not.toThrow();
  });

  test('Invalid PESEL fails', () => {
    const data = { ownerName: 'Jan Kowalski', pesel: '123' };
    expect(() => ownerSchema.parse(data)).toThrow();
  });

  test('Short name fails', () => {
    const data = { ownerName: 'A', pesel: '12345678901' };
    expect(() => ownerSchema.parse(data)).toThrow();
  });

  test('Optional phone field accepted', () => {
    const data = { ownerName: 'Jan Kowalski', pesel: '12345678901', phone: '600123456' };
    expect(() => ownerSchema.parse(data)).not.toThrow();
  });
});

// Test vehicle validation
const vehicleSchema = z.object({
  vehicleBrand: z.string().min(2),
  vehicleModel: z.string().min(1),
  registration: z.string().min(4),
  vin: z.string().optional(),
});

describe('Vehicle Validation', () => {
  test('Valid vehicle data passes', () => {
    const data = { vehicleBrand: 'Toyota', vehicleModel: 'Corolla', registration: 'WA12345' };
    expect(() => vehicleSchema.parse(data)).not.toThrow();
  });

  test('Missing registration fails', () => {
    const data = { vehicleBrand: 'Toyota', vehicleModel: 'Corolla', registration: 'WI' };
    expect(() => vehicleSchema.parse(data)).toThrow();
  });

  test('Short brand fails', () => {
    const data = { vehicleBrand: 'T', vehicleModel: 'Corolla', registration: 'WA12345' };
    expect(() => vehicleSchema.parse(data)).toThrow();
  });
});

// Test insurance validation
const insuranceSchema = z.object({
  insurer: z.string().min(2),
  policyNumber: z.string().min(3),
  endDate: z.string().min(1),
  cancellationType: z.enum(['art28', 'art28a', 'art31']),
});

describe('Insurance Validation', () => {
  test('Valid insurance data passes', () => {
    const data = {
      insurer: 'PZU',
      policyNumber: 'ABC123456',
      endDate: '2026-12-31',
      cancellationType: 'art28',
    };
    expect(() => insuranceSchema.parse(data)).not.toThrow();
  });

  test('Invalid cancellation type fails', () => {
    const data = {
      insurer: 'PZU',
      policyNumber: 'ABC123456',
      endDate: '2026-12-31',
      cancellationType: 'invalid',
    };
    expect(() => insuranceSchema.parse(data as any)).toThrow();
  });

  test('Short policy number fails', () => {
    const data = {
      insurer: 'PZU',
      policyNumber: 'AB',
      endDate: '2026-12-31',
      cancellationType: 'art28',
    };
    expect(() => insuranceSchema.parse(data)).toThrow();
  });
});

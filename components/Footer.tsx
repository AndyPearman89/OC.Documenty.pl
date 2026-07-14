import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer>
      <div className="container footerGrid">
        <div>
          <Logo />
          <p>Profesjonalne wzory dokumentów OC i AC. Szybko, wygodnie i bezpiecznie.</p>
          <p className="networkNote">
            Serwis jest częścią <a href="https://documenty.pl">Documenty.pl</a>
          </p>
        </div>

        <div>
          <strong>Dokumenty</strong>
          <Link href="/dokumenty">Wszystkie dokumenty</Link>
          <Link href="/generator">Wypowiedzenie OC</Link>
          <Link href="/wspolne-oswiadczenie">Wspólne oświadczenie</Link>
          <Link href="/oswiadczenie-sprawcy">Oświadczenie sprawcy</Link>
          <Link href="/umowa-kupna-sprzedazy">Umowa kupna-sprzedaży</Link>
          <Link href="/blog">Blog</Link>
        </div>

        <div>
          <strong>Generator i pomoc</strong>
          <Link href="/generator">Generator dokumentów</Link>
          <Link href="/ubezpieczyciele">Ubezpieczyciele</Link>
          <Link href="/faq">Najczęstsze pytania</Link>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          <Link href="/regulamin">Regulamin</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>

        <div>
          <strong>Kontakt</strong>
          <a href="mailto:oc@documenty.pl">oc@documenty.pl</a>
          <span>Pon.-Pt. 8:00-16:00</span>
          <small>Wsparcie i kontakt w sprawach dokumentów</small>
        </div>
      </div>

      <div className="container copyright">
        <span>© 2026 OC.Documenty.pl · Wszystkie prawa zastrzeżone</span>
        <span>Część platformy Documenty.pl</span>
      </div>
    </footer>
  );
}

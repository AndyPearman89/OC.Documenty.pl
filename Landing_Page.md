# LANDING PAGES

Real, currently-implemented pages only (see `app/` for source of truth).

---

# Główne

```
/
/generator
/dokumenty
/blog
/faq
/kontakt
```

---

# Dokumenty (lib/catalog.ts → /dokumenty/[slug])

```
wypowiedzenie-oc
zmiana-ubezpieczyciela
zwrot-skladki-oc
oswiadczenie-sprawcy
wspolne-oswiadczenie
zgloszenie-sprzedazy
umowa-kupna-sprzedazy
umowa-kupna-sprzedazy-wspolwlasciciel
umowa-cesji-praw-z-polisy
umowa-darowizny-samochodu
odstapienie-od-umowy-ubezpieczenia-zawartej-na-odleglosc
reklamacja
```

`oswiadczenie-sprawcy`, `wspolne-oswiadczenie`, `umowa-kupna-sprzedazy` and `umowa-kupna-sprzedazy-wspolwlasciciel` additionally have dedicated top-level pages (`app/oswiadczenie-sprawcy/`, etc.) with a full interactive form, not just a catalog landing page.

---

# Kolizja

```
/kolizja
```

---

# Ubezpieczyciele (lib/catalog.ts → insurerProfiles)

```
/ubezpieczyciele
/ubezpieczyciele/pzu        (dedicated custom landing page)
/ubezpieczyciele/[slug]     → warta, allianz, link4, uniqa, generali, compensa,
                              ergo-hestia, interrisk, proama, tuw, benefia
```

---

# Legal

```
/polityka-prywatnosci
/regulamin
```

---

# Not implemented

Everything below does **not** exist and should not be assumed present: `/premium`, `/dashboard`, `/o-nas`, `/ai-generator`, `/pdf`, `/kategorie/*`, `/poradniki`, `/miasto/{miasto}/...`, per-insurer sub-routes like `/{firma}/wypowiedzenie-oc`, and any single-topic SEO page not backed by an entry in `lib/catalog.ts` or `lib/blog.ts`.

If a new landing page is needed, add it to `lib/catalog.ts` (documents) or `lib/blog.ts` (articles) and this file, rather than hand-rolling a one-off route.

# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = blok 30 minut
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamist dni są rózne stoliki
    - po kliknieciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwia edycje i zapisywanie zmian
- `/tables/booking/new`
  - analogicznie do powyższej, bez początkowych informacji
- `/tables/events/:id`
  - analogicznie do powyższej, dla eventów
- `/tables/events/new`
  - analogicznie do powyższej, dla eventów, bez początkowych informacji

# Widok kelnera

- `/waiter`
  - tabela
    - w wieraszach stoliki
    - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione profukty z opcjami i cena)
  - kwotę zamówienia
- `/waiter/order/:id`
  - jak powyższa

# Widok kuchni

- `/kitchen`
  - wyświetla listę zamówień w kolejnosci ich złożenia
  - lista musi zaiwrać:
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane
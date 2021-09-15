## Projekt 4 – Notekeep

 1.	Aplikacja pozwala na tworzenie, przechowywanie, edycję i usuwanie notatek. Każda notatka musi w minimalnej formie posiadać:
•	Tytuł
•	Treść
•	Kolor notatki
•	Możliwość przypięcia do góry na liście notatek
•	Datę utworzenia
 2.	Notatki powinny być zapisywane w localStorage i wyświetlane w formie tablicy notatek na stronie głównej aplikacji.

Wersja ciekawsza:
1.	Zapisywanie daty przypomnień (i generowanie przypomnień w formie Notification)
2.	Tagowanie notatek
3.	Wyszukiwarka notatek (po wszystkich dostępnych pola notatki)

Przykłady: Google Keep, Evernote, Onenote
Ważne: wykorzystaj projekt Pogodynka I dokonaj refaktoryzacji kodu.
1.	Projekt  NoteKeep powinien składać się w minimalnej formie z klas App, Notes, Note, AppStorage.
2.	Każda klasa powinna być w osobnym pliku
3.	Zdefiniuj interfejs do obiektu AppStorage
4.	Użyj Sass do formatowania wizualnego



----

Projekt 4 – Notekeep część 2
1.	Stwórz klasę AppFirestoreStorage (implementuje interfejs AppStorage)
2.	W klasie AppFirestoreStorage uzupełnij kod tak by dane z notatek były zapisywane w Firestore
3.	Stwórz plik config.ts, umieść w nim stałą z której program pobiera informację czy zapisywać dane w localStorage czy w Firestore (decyduje programista wpisując odpowiednią zawartość do zmiennej)


----

Projekt 4 – Notekeep część 3 - testy
1.	Stwórz pięć testów jednostkowych (przetestuj metody które zwracają wynik swojego działania) używając narzędzia jest
2.	Stwórz test funkcjonalny polegający na dodaniu nowej notatki. Do wykonania testu wykorzystaj narzędzia jest i puppeteer. 
Scenariusz testu:
•	Wejdź na stronę aplikacji
•	Opcjonalnie: jeśli jest taka potrzeba kliknij w element tworzący nową notatkę
•	Uzupełnij tytuł treścią “Testowy tytuł notatki” 
•	Uzupełnij treść notatki treścią “Notatka testowa”
•	Kliknij przycisk zapisujący notatkę
•	Sprawdź czy nowa notatka widnieje na liście notatek.
Jeżeli w Twojej aplikacji scenariusz dodania notatki jest inny - użyj własnego scenariusza.
Testy powinny być umieszczone w osobnym katalogu /tests poza katalogiem z plikami źródłowymi, przykładowy katalog projektu:
Notekeep
  /src
  /tests

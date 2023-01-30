# This is a super cool color game :)
Dies ist unser Semesterprojekt in dem Fach: Hybride-App-Entwicklung.
Jeder Mensch hat ein anderes Farbverständnis und mit diesem Game wollen wir diese Fähigkeit verstärken. 

Wir wollten es in fünf Stufen umsetzen: 
1. der Nutzer erhält den RGB Wert und kann aus vier verschiedene Farben wählen, welche die richtige ist
2. der Nutzer erhält die Farbe und muss nun den RGB Wert schätzen. Zusätzlich bewertet die App die Leistung.
3. als nächsten wollten wir einen Casual & Ranking Mode einfügen und ein Scoreboard
4. ebenso wollten wir einen Multiplayer Scoreboard einfügen 
5. als letztes wollten wir einen Multiplayer als Herausforderung

In der Zeit haben wir nur die ersten 3 Stufen umgesetzt. 

## Benutzung
### Project setup
```
npm install
```
### Project start
```
expo start
```
### Open for Android
```
expo start --android
```
### Open for IOS
```
expo start --ios
```
## Aufbau
### Start Screen
Als erstes sieht man den Start Screen. Hier hat man die Möglichkeit zwischen zwei Games zu wählen, Fun Fields und Nice Numbers. 
Dies haben wir in 3 Steps umgesetzt.
Einmal die Button.js, hier sind die einzelnen Buttons generiert. Bei der StartScreen.js ist die einzelen Page generiert und die Buttons werden eingebunden. Als letztes wurde das ganze in der App.js übertragen: 
```
const handleGame1ButtonPress = () => {
    setCurrentScreen("GameScreen1");
  };
  const handleGame2ButtonPress = () => {
    setCurrentScreen("GameScreen2");
  };
```
```
case "StartScreen":
      currentScreenJSX = (
        <StartScreen
          onButton1Press={handleGame1ButtonPress}
          onButton2Press={handleGame2ButtonPress}
        />
      );
```
### Game Screen 1 (Fun Fields)
Der Service "getRandomColor.js" generiert ein zufälliges rgb object.
Die function "getRandomPointsToSum(sum)" generiert 3 zufällige Werte, die sich zur Summe (sum) aufaddieren.
Je größer die Variable sum ist, desto einfacher ist das Spiel.
Die von "getRandomPointsToSum(sum)" generierten Werte, werden auf die rgb Werte des objects aus getRandomColor() addiert/subtrahiert.
"getRandomPointsToSum(sum)" wird 3 mal ausgeführt, wobei sich sum jedesmal linear erhöht.
Dadurch wurden 3 falsche (aber ähnliche Farben) generiert. Diese werden gemeinsam mit der Farbe aus "getRandomColor()" in einem array gespeichert.
Im Anschluss wird die Reihenfolge der items im array von shuffleArray(array) randomisiert.
Die Farben im Array werden nun von React in die "ColorFieldButton" component gerendert.

### Game Screen 2
### End Game
Abhängig vom Ergebnis (Gewonnen oder Verloren) werden im EndScreen unterschiedliche Inhalte gerendert, die dem Spieler Feedback über seine Leistung geben.
Im Game Screen 1 wird außerdem der HighScore dargestellt.
### Highscore
Um ein permanentes Speichern des HighScores zu ermöglichen wird der "AsyncStorage" aus "@react-native-async-storage/async-storage" verwendet.
Beim Start der Anwendung wird der Highscore abgefragt und in einer Variable gespeichert. Da im Anschluss diese Variable genutzt werden kann, können lange Ladezeiten, die beim Zugriff auf den AsyncStorage auftreten, verhindert werden. Wenn ein neuer Highscore aufgestellt wird, wird der aktualisierte Wert im permanenten AsyncStorage gespeichert.
## Future Work 
Wir wollen an unseren letzten Punkten weiterarbeiten, nämlich den Multiplayer einführen und das dazugehörige Scoreboard einfügen. Beim Multiplayer wollen wir dann noch die Herausforderung hinzufügen.




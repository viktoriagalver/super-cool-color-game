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
### Game Screen 1
### Game Screen 2
### End Game
## Future Work 
Wir wollen zusätzlich die letzten Stufen umsetzen.




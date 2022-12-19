import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GameScreen from './screens/GameScreen';
import GameScreen2 from './screens/GameScreen2';

export default function App() {
  return (
    <View style={styles.container}>
      <GameScreen2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

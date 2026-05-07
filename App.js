import { SafeAreaView, StyleSheet } from 'react-native';
import PokedexScreen from './screens/PokedexScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PokedexScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
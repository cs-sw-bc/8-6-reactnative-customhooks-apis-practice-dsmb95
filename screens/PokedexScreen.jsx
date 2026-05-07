import { useState } from 'react';
import {
  View, Text, TextInput, Image,
  Button, FlatList, ActivityIndicator, StyleSheet
} from 'react-native';
import useFetch from '../hooks/useFetch';
import useInput from '../hooks/useInput';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export default function PokedexScreen() {

  // ============================================================
  // TODO 3
  // Use the useInput hook to create a search input.
  // Call the result: search
  // ============================================================


  // ============================================================
  // TODO 4
  // Use the useFetch hook to fetch a Pokemon.
  // Start with 'pikachu' as the default.
  // Destructure: data, loading, error, refetch
  // ============================================================


  // ============================================================
  // TODO 5
  // Declare a state variable called history (initial value: []).
  // This will store the names of Pokemon the user has searched.
  // ============================================================


  // ============================================================
  // TODO 6
  // Write a handleSearch function.
  // - Build the URL using BASE_URL and search.value
  //   e.g. `${BASE_URL}/${search.value.toLowerCase()}`
  // - Call refetch with the new URL
  // - Add search.value to history
  // ============================================================
  const handleSearch = () => {

  };

  if (loading) return <ActivityIndicator size="large" style={styles.center} />;
  if (error) return <Text style={styles.error}>Pokemon not found!</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pokédex 🎮</Text>

      {/* Search bar */}
      {/* TODO 7: Wire up the TextInput using spread from useInput */}
      {/* Add a Search button that calls handleSearch */}
      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter Pokemon name..."
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      {/* Pokemon card */}
      {/* TODO 8: Display the Pokemon details from data */}
      {/* - Name: data?.name */}
      {/* - Image: data?.sprites?.front_default */}
      {/* - Type: data?.types?.[0]?.type?.name */}
      {/* - HP: data?.stats?.[0]?.base_stat */}
      {data && (
        <View style={styles.card}>

        </View>
      )}

      {/* Search history */}
      {/* TODO 9: Render the history array in a FlatList */}
      {/* Each row shows the Pokemon name */}
      {/* keyExtractor: (item, index) => String(index) */}
      {/* ListEmptyComponent: show "No searches yet" */}
      <Text style={styles.historyHeading}>Search History</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center' },
  heading: { fontSize: 26, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  searchRow: { flexDirection: 'row', gap: 8, marginBottom: 24, alignItems: 'center' },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  pokemonName: { fontSize: 22, fontWeight: 'bold', textTransform: 'capitalize', marginBottom: 4 },
  pokemonType: { fontSize: 14, color: '#666', marginBottom: 8 },
  pokemonHp: { fontSize: 14, color: '#333' },
  image: { width: 150, height: 150 },
  historyHeading: { fontSize: 18, fontWeight: '600', marginBottom: 8 },
  historyItem: { fontSize: 14, paddingVertical: 4, borderBottomWidth: 1, borderColor: '#eee', textTransform: 'capitalize' },
  empty: { color: '#999', fontStyle: 'italic' },
  error: { color: 'red', textAlign: 'center', marginTop: 40, fontSize: 16 },
});

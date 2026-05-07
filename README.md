# Lesson 6 Assignment — Custom Hooks & APIs
## Pokédex 🎮

---

## Overview

Build a React Native Pokédex app that lets users search for any Pokemon by name and display its details — using custom hooks you build yourself.

---

## Setup

### 1. Accept the GitHub Classroom assignment and clone your repo

```bash
git clone YOUR_REPO_URL
cd pokedex
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the app

```bash
npx expo start
```

> Scan the QR code with Expo Go on your phone.

---

## Folder Structure

Your repo already has this structure — do not change it:

```
Pokedex/
├── App.js
├── screens/
│   └── PokedexScreen.jsx
└── hooks/
    ├── useFetch.js
    └── useInput.js
```

---

## The API

You will be using **PokeAPI** — no signup or API key required.

| Endpoint | Example |
|---|---|
| `https://pokeapi.co/api/v2/pokemon/{name}` | `/pokemon/pikachu` |

Useful fields in the response:

| Field | Value |
|---|---|
| `data.name` | Pokemon name |
| `data.sprites.front_default` | Image URL |
| `data.types[0].type.name` | Primary type |
| `data.stats[0].base_stat` | HP |
| `data.stats[1].base_stat` | Attack |

> Tip: paste `https://pokeapi.co/api/v2/pokemon/pikachu` in your browser to see the full response.

---

## Requirements

### Hook: `useFetch` (hooks/useFetch.js)
- Accepts a `url` string
- Manages `data`, `loading`, and `error` state
- Fetches the url on mount using `useEffect`
- Returns `{ data, loading, error, refetch }`
- `refetch` should allow the component to re-trigger the fetch with a new URL

### Hook: `useInput` (hooks/useInput.js)
- Accepts an `initialValue`
- Manages a single `value` state
- Returns `{ value, onChangeText }`

### Screen: `PokedexScreen` (screens/PokedexScreen.jsx)
- Uses `useInput` to manage the search field
- Uses `useFetch` to fetch Pokemon data
- Shows an `ActivityIndicator` while loading
- Shows an error message if the Pokemon is not found
- Displays the following Pokemon details:
  - Image
  - Name
  - Type
  - HP
- Has a Search button that fetches the typed Pokemon
- Keeps a history of searched Pokemon names in a `FlatList`

---

## Expected Result

When complete your app should look something like this:

```
┌─────────────────────────┐
│        Pokédex 🎮        │
│  [pikachu    ] [Search] │
│                         │
│        🖼 image          │
│        Pikachu          │
│        Type: electric   │
│        HP: 35           │
│                         │
│  Search History         │
│  pikachu                │
│  charmander             │
│  bulbasaur              │
└─────────────────────────┘
```

---

## Submission

Push your completed code to your GitHub Classroom repo:

```bash
git add .
git commit -m "completed pokedex assignment"
git push
```

---

## Hints

- `useInput` returns `{ value, onChangeText }` — spread it onto `TextInput` with `{...search}`
- `useFetch` should return raw data — let the component decide what to extract
- `data?.sprites?.front_default` uses optional chaining — safe to use before data loads
- If a Pokemon name is wrong the API returns a 404 — check `response.ok` before calling `.json()`
- `textTransform: 'capitalize'` in StyleSheet will capitalise the Pokemon name for you
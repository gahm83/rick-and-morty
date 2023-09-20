import { create } from 'zustand';
import { devtools } from 'zustand/middleware';


let store = ((set) => ({
  currentPage: 1,
  characters: [],
  incrementPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  fetchCharacters: async ( page = null ) => {
    const withPage = page ? `?page=${page}` : '';
    await fetch(`/api/characters${withPage}`)
    .then(response => response.json())
    .then(data => {
      const characters = data.data.results;
      if (page) {
        set((state) => ({ characters: state?.characters?.concat(characters) }));
      } else {
        set({ characters })
      }
    })
  },
  activeSearch: false,
  toggleSearch: () => set((state) => ({ activeSearch: !state.activeSearch })),
  currentSearchPage: 1,
  results: [],
  incrementSearchPage: () => set((state) => ({ currentSearchPage: state.currentSearchPage + 1 })),
  searchCharacters: async (name, page = null) => {
    
    let params = new URLSearchParams();
    name && params.set("name", name);
    page && params.set("page", page);

    await fetch(`/api/search?${params.toString()}`)
      .then(response => response.json())
      .then(data => {
        const results = data.data.results;
        set({ results });
    })
  },
}))

store = devtools(store);
export const useRickStore = create(store);
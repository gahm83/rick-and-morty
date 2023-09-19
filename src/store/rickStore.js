import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

let store = ((set) => ({
  data: [],
  characters: [],
  currentPage: 1,
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
          set({ data, characters })
        }
      })
  }
}))

store = devtools(store);
export const useRickStore = create(store);
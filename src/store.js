import create from "zustand";

export const useStore = create((set) => ({
  ui: {
    planet: 0,
    screen: "about",
  },
  setUiPlanet: (section) =>
    set((state) => ({ ui: { ...state.ui, planet: section } })),
  setUiScreen: (section) =>
    set((state) => ({ ui: { ...state.ui, screen: section } })),
}));

import create from 'zustand'

export const useStore = create((set) => ({
  ui: {
    nav: 0,
  },
  earth: {
    positionX: undefined,
    rotationX: undefined,
  },
  setEarth: (pX, rX) =>
    set((state) => ({ earth: { positionX: pX, rotationX: rX } })),
  setUi: (section) => set((state) => ({ ui: { nav: section } })),
}))

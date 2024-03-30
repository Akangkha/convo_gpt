import { create } from "zustand";

const useComponentStore = create((set) => ({
  chats: [],
  addComponent: (message) =>
    set((state) => ({ chats: [...state.chats, { message }] })),
  deleteComponent: () =>
    set((state) => ({
      chats: [],
    })),
}));

const useHoverStore = create((set) => ({
  hovered: "",
  hoverText: (element) => set({ hovered: element }),
}));

export { useHoverStore, useComponentStore };

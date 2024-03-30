import { create } from "zustand";
const useComponentStore = create((set) => ({
  chats: [],
  addComponent: (component) =>
    set((state) => ({ chats: [...state.chats, component] })),
  deleteComponent: (index) =>
    set((state) => ({
      components: state.components.filter((_, i) => i !== index),
    })),
}));

export default useComponentStore;

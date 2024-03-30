

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

export default useComponentStore;

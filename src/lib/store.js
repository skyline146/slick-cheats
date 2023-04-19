import { create } from "zustand";

const useStatusStore = create((set) => ({
  status: {},
  setGamesStatus: (data) => set((state) => ({ status: data })),
}));

export default useStatusStore;

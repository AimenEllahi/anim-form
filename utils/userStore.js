import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set, get) => ({
      user: {
        email: "",
      },

      setUser: (user) => set({ user }),
      setBlueCredits: (blueCredits) =>
        set({ user: { ...get().user, blueCredits } }),
      setYellowCredits: (yellowCredits) =>
        set({ user: { ...get().user, yellowCredits } }),
      setUserStared: (stared) => set({ user: { ...get().user, stared } }),
    }),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useUserStore;

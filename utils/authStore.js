import create from "zustand";

const useAuthStore = create((set) => ({
  user: {
    email: "",
    password: "",
    // Add other user properties
  },
  error: null,
  isLoading: false,
  setUser: (user) => set({ user }),
  setError: (error) => set({ error }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useAuthStore;

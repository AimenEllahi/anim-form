import { create } from "zustand";

const useGameStore = create((set, get) => ({
  currentCharacter: null,
  currentCampaign: null,
  startNewGame: false,
  responseText: "",
  step: 1,
  game: null,
  image: null,

  setCurrentCharacter: (currentCharacter) => set({ currentCharacter }),
  setCurrentCampaign: (currentCampaign) => set({ currentCampaign }),
  setResponseText: (responseText) => set({ responseText }),
  setGameImage: (image) => set({ image }),
  setGame: (game) => set({ game }),
  setStartNewGame: (startNewGame) => set({ startNewGame }),
  setStep: (step) => set({ step }),

  reset: () =>
    set({
      currentCharacter: null,
      currentCampaign: null,
      responseText: "",
      game: null,
      image: null,
    }),
}));

export default useGameStore;

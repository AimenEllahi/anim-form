import { create } from "zustand";

const useControlsStore = create((set, get) => ({
  showMenu: false,
  showLanguageDialogue: false,
  showCreditsDialogue: false,
  selectedTab: "inProgress",
  selectedGame: null,
  selectedCompletedGame: null,
  gamesLength: 0,
  setSelectedGame: (selectedGame) => set({ selectedGame }),
  setSelectedCompletedGame: (selectedCompletedGame) =>
    set({ selectedCompletedGame }),
  setSelectedTab: (selectedTab) => set({ selectedTab }),
  setGamesLength: (gamesLength) => set({ gamesLength }),
  setShowLanguageDialogue: (showLanguageDialogue) =>
    set({ showLanguageDialogue }),
  setShowMenu: (showMenu) => set({ showMenu }),
  setShowCreditsDialogue: (showCreditsDialogue) => set({ showCreditsDialogue }),
}));

export default useControlsStore;

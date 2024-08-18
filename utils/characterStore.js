//characterStore.js
import { create } from "zustand";

const useStepperStore = create((set) => ({
  activeStep: 0,
  gender: "male",
  abilitiesRoll: {},
  isRollingAbilities: false,
  finalRollResults: {},
  selectedCharacteristic: {
    name: null,
    image: null,
    description: null,
  },
  selectedFace: null,
  backgroundQuery: "",
  characterNameError: false,
  showModal: false,
  raceQuery: "",

  setBackgroundQuery: (backgroundQuery) => set({ backgroundQuery }),
  setRaceQuery: (raceQuery) => set({ raceQuery }),
  setActiveStep: (activeStep) => set({ activeStep }),
  setSelectedCharacteristic: (selectedCharacteristic) =>
    set({ selectedCharacteristic }),
  setShowModal: (showModal) => set({ showModal }),
  setCharacterNameError: (characterNameError) => set({ characterNameError }),
  setSelectedFace: (selectedFace) => set({ selectedFace }),
  setAbilitiesRoll: (ability) =>
    set((state) => ({
      abilitiesRoll: {
        ...state.abilitiesRoll,
        [ability]: true,
      },
    })),
  setIsRollingAbilities: (isRollingAbilities) => set({ isRollingAbilities }),
  setFinalRollResults: (finalRollResults) => set({ finalRollResults }),
  setGender: (gender) => set({ gender }),
}));

export default useStepperStore;

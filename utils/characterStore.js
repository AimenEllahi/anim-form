import { create } from "zustand";

const useStepperStore = create((set) => ({
  // Existing states
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

  // New character-related states
  character: {
    race: "",
    class: "",
    abilities: {},
    background: "",
    personality: "",
    alignment: "",
    equipment: {},
    gold: 0,
    name: "",
  },

  // Actions to update the existing states
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

  // New actions to update character-related information
  setCharacter: (newCharacterData) =>
    set((state) => ({
      character: { ...state.character, ...newCharacterData },
    })),

  setCharacterRace: (race) =>
    set((state) => ({
      character: { ...state.character, race },
    })),

  setCharacterClass: (charClass) =>
    set((state) => ({
      character: { ...state.character, class: charClass },
    })),

  setCharacterAbilities: (abilities) =>
    set((state) => ({
      character: { ...state.character, abilities },
    })),

  setCharacterBackground: (background) =>
    set((state) => ({
      character: { ...state.character, background },
    })),

  setCharacterPersonality: (personality) =>
    set((state) => ({
      character: { ...state.character, personality },
    })),

  setCharacterAlignment: (alignment) =>
    set((state) => ({
      character: { ...state.character, alignment },
    })),

  setCharacterEquipment: (equipment) =>
    set((state) => ({
      character: { ...state.character, equipment },
    })),

  setCharacterGold: (gold) =>
    set((state) => ({
      character: { ...state.character, gold },
    })),

  setCharacterName: (name) =>
    set((state) => ({
      character: { ...state.character, name },
    })),
}));

export default useStepperStore;

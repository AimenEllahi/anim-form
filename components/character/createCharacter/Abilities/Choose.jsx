import React, { useState, useEffect } from "react";
import CustomButton from "@/components/ui/custom-button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Dice from "@/components/ui/Icons/Dice";
import DiceBox from "@3d-dice/dice-box";
import useStepperStore from "@/utils/characterStore";
import CustomDropdown from "@/components/ui/custom-dropdown";
import RolledDice from "@/components/ui/Icons/RolledDice";
import { cn } from "@/lib/utils";
import Help from "@/components/ui/Icons/Help";

const _ABILITIES = [
  {
    name: "Strength",
    description:
      "Strength measures physical power and the ability to exert force.",
  },
  {
    name: "Dexterity",
    description: "Dexterity gauges agility, reflexes, and coordination.",
  },
  {
    name: "Constitution",
    description: "Constitution represents health, stamina, and vital force.",
  },
  {
    name: "Intelligence",
    description:
      "Intelligence assesses mental acuity, learning ability, and memory.",
  },
  {
    name: "Wisdom",
    description: "Wisdom evaluates perceptiveness, intuition, and insight.",
  },
  {
    name: "Charisma",
    description:
      "Charisma quantifies charm, social influence, and leadership capability.",
  },
];

const ABILITIES = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
];

const DiceResults = ({ results, value }) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2 py-3.5'>
        {results.map((result, index) => {
          return (
            <RolledDice
              roll={result}
              key={index}
              className={cn(
                "h-5 w-5 fill-successGreen",
                index == 0 && "fill-errorRed"
              )}
            />
          );
        })}
      </div>
      <span className='running-text-mono text-gray2 uppercase'>{value}</span>
    </div>
  );
};
export default function Choose({ abilities, handleChangeAbilities }) {
  const {
    isRollingAbilities,
    setIsRollingAbilities,
    finalRollResults,
    setFinalRollResults,
  } = useStepperStore();
  const [rollResults, setRollResults] = useState(finalRollResults);
  const [diceBox, setDiceBox] = useState(null);

  const [options, setOptions] = useState(ABILITIES);
  const [rollSound, setRollSound] = useState(null);
  const [showRollAll, setShowRollAll] = useState(true);

  useEffect(() => {
    setFinalRollResults(rollResults);
  }, [rollResults]);

  useEffect(() => {
    //initiate sound
    const audio = new Audio("/audio/dice-roll.mp3");
    setRollSound(audio);

    //initiate dice box
    const _diceBox = new DiceBox("#dice-box-abilities", {
      assetPath: "/assets/dice-box", // required
      theme: "default", //optional
      enableShadows: true, // optional
      themeColor: "#242e9e", // optional
      scale: 4,
      lightIntensity: 1,
      shadowIntensity: 2,
    });
    _diceBox.init();
    setDiceBox(_diceBox);

    //set initial abilities
    const selectedOptions = Object.keys(rollResults).map((result, index) => {
      return rollResults[result].ability;
    });
    setOptions((prev) =>
      ABILITIES.filter((option) => !selectedOptions.includes(option))
    );
  }, []);

  const handleRollDice = async (index) => {
    //setAbilitiesRoll(ability);
    setIsRollingAbilities(true);
    setTimeout(() => {
      rollSound.play();
    }, 1000);
    try {
      const result = await diceBox.roll("4d6");
      const value = result
        .map((dice) => dice.value)
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((a, b) => a + b, 0);

      const resultPattern = result
        .map((dice) => dice.value)
        .sort((a, b) => a - b);

      //loop through result and get all the values, drop the lowest
      setRollResults((prev) => ({
        ...prev,
        [index]: {
          ...prev[index],
          value,
          result: resultPattern,
        },
      }));

      if (rollResults[index]?.ability) {
        handleChangeAbilities({
          ...abilities,
          [rollResults[index].ability]: value,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        diceBox.clear();
        setIsRollingAbilities(false);
      }, 1000);
    }
  };

  const handleRollAll = async (index) => {
    //setAbilitiesRoll(ability);

    try {
      setIsRollingAbilities(true);
      setTimeout(() => {
        rollSound.play();
      }, 1000);
      setShowRollAll(false);
      const result = await diceBox.roll("24d6");
      const values = result.map((dice) => dice.value);
      const abilities = [
        "strength",
        "dexterity",
        "constitution",
        "intelligence",
        "wisdom",
        "charisma",
      ];

      const usedIndexes = new Set(); // Track used indexes

      const abilityRolls = []; // Store rolls for each ability

      abilities.forEach((ability, index) => {
        // Randomly select 4 unique values
        const selectedValues = [];
        while (selectedValues.length < 4) {
          const randomIndex = Math.floor(Math.random() * values.length);
          if (!usedIndexes.has(randomIndex)) {
            selectedValues.push(values[randomIndex]);
            usedIndexes.add(randomIndex);
          }
        }

        // Sort and pick the highest 3 out of the selected 4
        const highestThree = selectedValues.sort((a, b) => b - a).slice(0, 3);
        const sum = highestThree.reduce((a, b) => a + b, 0);

        setRollResults((prev) => ({
          ...prev,
          [index]: {
            ...prev[index],
            ability,
            value: sum,
            result: [...selectedValues].reverse(), // Store the detailed roll results for each ability
          },
        }));
        abilityRolls.push({ ability, value: sum });
      });

      abilityRolls.forEach(({ ability, value }) => {
        handleChangeAbilities({
          ...abilities,
          [ability]: value,
        });
      });
    } catch (error) {
    } finally {
      setOptions([]);

      setTimeout(() => {
        setIsRollingAbilities(false);
        diceBox.clear();
      }, 3000);
    }
  };
  const handleChangeAbilityScore = (ability, index, value) => {
    setRollResults({
      ...rollResults,
      [index]: {
        ...rollResults[index],
        ability,
      },
    });

    handleChangeAbilities({ ...abilities, [ability]: value });
  };

  useEffect(() => {
    const selectedOptions = Object.keys(rollResults).map((result, index) => {
      return rollResults[result].ability;
    });
    console.log(selectedOptions);
    setOptions((prev) =>
      ABILITIES.filter((option) => !selectedOptions.includes(option))
    );
  }, [rollResults]);

  const resetAbilities = () => {
    setRollResults({});
    diceBox.clear();
    setShowRollAll(true);
    setOptions(ABILITIES);
  };

  return (
    <div className='md:rounded-[16px] flex flex-col gap-6 w-full md:w-fit max-h-full h-fit md:p-5 md:pt-3.5 md:border border-white/10 md:bg-white/[8%]  '>
      <div className='flex items-center justify-between'>
        <h1 className='running-text-large  hidden md:block'>Abilities</h1>
        <Popover>
          <PopoverTrigger>
            <div className='flex items-center gap-2 running-text-mono uppercase'>
              <Help className={cn("h-6 w-6   ease-animate   ")} />
              help
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <p style={{ marginBottom: "10px" }}>
              Here, you can roll for your ability scores. When you press the
              "Roll" button, four 6-sided dice will be rolled.
            </p>
            <p style={{ marginBottom: "10px" }}>
              The lowest result will be dropped, and the remaining three will be
              added together to give you a total. You can then assign that total
              to an ability score.
            </p>
            <p style={{ marginBottom: "10px" }}>
              {" "}
              You also have the option to roll for all your ability scores at
              once by clicking "Roll All Dice." In this case, the scores will be
              randomly assigned to each ability, but you can swap them around if
              you'd like.
            </p>
          </PopoverContent>
        </Popover>

        {showRollAll && (
          <CustomButton
            disabled={isRollingAbilities}
            className='w-fit md:hidden'
            variant={"subtle"}
            onClick={handleRollAll}
            withIcon={true}
          >
            <Dice className='h-5 opacity-70 w-5' />
            Roll All Dice
          </CustomButton>
        )}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-start gap-6  w-full hide-scrollbar overflow-y-scroll'>
        {_ABILITIES.map((ability, index) => {
          const diceRoll = rollResults[index];
          return (
            <div
              key={index}
              className='border col-span-1 border-white/5  bg-white/[.02] p-5 rounded-[10px] gap-5 flex flex-col '
            >
              {diceRoll?.result ? (
                <DiceResults results={diceRoll.result} value={diceRoll.value} />
              ) : (
                <CustomButton
                  className={"w-full"}
                  variant={"primary"}
                  disabled={isRollingAbilities}
                  withIcon={true}
                  onClick={() => handleRollDice(index)}
                >
                  <Dice className='h-5 fill-russianViolet w-5' />
                  Roll
                </CustomButton>
              )}

              <CustomDropdown
                setSelectedOption={(abiliity) =>
                  handleChangeAbilityScore(abiliity, index, diceRoll?.value)
                }
                selectedOption={diceRoll?.ability || "Select Stat"}
                options={["Select Stat", ...options]}
                className={"w-full min-w-full"}
                placeholder={"Select Stat"}
              />
            </div>
          );
        })}
      </div>

      <div className='flex justify-between items-center'>
        <div className='flex gap-5'>
          <CustomButton
            disabled={isRollingAbilities}
            className='w-fit'
            onClick={resetAbilities}
            withIcon={true}
          >
            <img
              src='/Icons/Reset.svg'
              alt='logo'
              title='reset icon'
              className='h-5 w-5 invert opacity-70'
            />
            Reset Points
          </CustomButton>
          {showRollAll && (
            <CustomButton
              disabled={isRollingAbilities}
              className='w-fit hidden md:flex'
              variant={"subtle"}
              onClick={handleRollAll}
              withIcon={true}
            >
              <Dice className='h-5 opacity-70 w-5' />
              Roll All Dice
            </CustomButton>
          )}
        </div>
        <span className='running-text-mono text-gray2 uppercase'>
          Points Total:{" "}
          {Object.keys(rollResults)
            .map((result) => rollResults[result].value)
            .reduce((a, b) => a + b, 0) || 0}
        </span>
      </div>
    </div>
  );
}

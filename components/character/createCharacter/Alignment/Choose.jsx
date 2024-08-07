import React, { useState } from "react";
import SearchInput from "@/components/ui/search-input";
import { cn } from "@/lib/utils";
import { ALIGNMENT } from "../constants";
import useCharacterStore from "@/utils/characterStore";
import Information from "@/components/ui/Icons/Information";
export default function Choose({ handleAlignmentChange, alignment }) {
  const { setShowModal, setSelectedCharacteristic } = useCharacterStore();
  const [query, setQuery] = useState("");
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div className='md:rounded-[16px] flex flex-col gap-5 w-full md:w-3/5 lg:w-2/5  h-fit max-h-full md:p-5  md:pt-6 md:border md:border-white/10 md:bg-white/[8%] md:pb-0  '>
      <h1 className='headline-4 hidden md:block'>Alignment</h1>
      <SearchInput
        query={query}
        setQuery={setQuery}
        className={"hidden md:block"}
      />
      <div className='grid grid-cols-12  gap-4 md:gap-5 w-full overflow-auto hide-scrollbar md:pb-5'>
        {ALIGNMENT.filter(({ name }) => {
          if (query) {
            return name.toLowerCase().includes(query.toLowerCase());
          }

          return true;
        }).map(({ name, description }, index) => (
          <div
            key={index}
            onClick={() => {
              handleAlignmentChange({ name, description });
              setSelectedCharacteristic({
                name,
                image: `https://dndai-images.s3.eu-central-1.amazonaws.com/alignments/${name
                  .toLowerCase()
                  .replace(" ", "-")}.webp`,
                description: description,
              });
            }}
            className={`flex cursor-pointer col-span-4 md:col-span-4  relative  flex-col running-text-mono uppercase justify-start items-start gap-3  `}
          >
            <div className='relative w-full  '>
              <Information
                onClick={handleShowModal}
                className={cn(
                  "h-6 w-6  left-2 bottom-2 md:hidden ease-animate absolute ",
                  alignment?.name !== name && "opacity-0 pointer-events-none"
                )}
              />

              <img
                src={`https://dndai-images.s3.eu-central-1.amazonaws.com/alignments/${name
                  .toLowerCase()
                  .replaceAll(" ", "-")}.webp

`}
                alt={name}
                className={` w-full object-contain ease-animate rounded-[10px] ${
                  alignment?.name === name
                    ? "border-2 border-irisPurpleLight"
                    : ""
                }`}
              />
            </div>
            <span className='description'>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

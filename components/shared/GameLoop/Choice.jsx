import React from "react";
import { Select } from "@radix-ui/themes";

const Input = ({ input, setInput }) => {
  return (
    <input
      type='text'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder='Enter your choice'
      className='bg-transparent border px-3 w-full md:w-64  placeholder:text-[#d3d3d3] text-white py-1 rounded'
    />
  );
};

//selection component
const Selection = ({ selection, setSelection }) => {
  return (
    <Select.Root onValueChange={(value) => setSelection(value)}>
      <Select.Trigger
        className='z-[50] w-32 md:!w-[20rem]  placeholder:!text-white !text-white !border !py-1 !px-2 !border-white !rounded-md'
        placeholder='Pick a Style'
      />
      <Select.Content className='z-[50] !bg-black !text-white h-full overflow-scroll '>
        <Select.Item value='Art Nouveau'>Art Nouveau</Select.Item>
        <Select.Item value='Anime'>Anime</Select.Item>
        <Select.Item value='Pixel Art'>Pixel Art</Select.Item>
        <Select.Item value='Line Art'>Line Art</Select.Item>
        <Select.Item value='Steam Punk'>Steam Punk</Select.Item>
        <Select.Item value='Blender Render'>Blender Render</Select.Item>
        <Select.Item value='Low-Poly Art'>Low-Poly Art</Select.Item>
        <Select.Item value='Psychedelic Art'>Psychedelic Art</Select.Item>
        <Select.Item value='Neon Art'>Neon Art</Select.Item>
        <Select.Item value='Airbrush Art'>Airbrush Art</Select.Item>
        <Select.Item value='Origami'>Origami</Select.Item>
        <Select.Item value='Wood carving'>Wood carving</Select.Item>
        <Select.Item value='Oil Painting'>Oil Painting</Select.Item>
        <Select.Item value='Silhouette illustration'>
          Silhouette illustration
        </Select.Item>
        <Select.Item value='Blueprint'>Blueprint</Select.Item>
        <Select.Item value='American Impressionism'>Impressionism</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

const Choice = ({
  buttonText,
  title,
  isInput,
  onClick,
  input = "",
  savedGame = false,
  setInput = null,
}) => {
  return (
    <div className='flex flex-col items-center flex-1 h-3/4'>
      <div className='flex items-center w-[43vw] md:w-full h-full py-10 flex-1 flex-col gap-y-24'>
        <label className='text-white md:text-2xl text-xl capitalize'>
          {title}
        </label>
        <div className='flex md:flex-row flex-col gap-x-2'>
          {isInput ? (
            <Input input={input} setInput={setInput} />
          ) : (
            <Selection selection={input} setSelection={setInput} />
          )}

          <button
            type='button'
            className='justify-center mt-2 md:mt-0 h-10 border-0 rounded-md bg-green-600 px-3  py-1 text-sm font-semibold text-white shadow-sm hover:bg-green-500  '
            onClick={onClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Choice;

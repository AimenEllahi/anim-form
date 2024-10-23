"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export default function CustomTextArea({
  placeholder,
  value,
  onChange,
  isComment,
  className,
  error,
  maxLength = 2500,
}) {
  const [inFocus, setInFocus] = useState(false);

  return (
    <div
      className={cn(
        "relative disable-dbl-tap-zoom rounded-[10px]  h-[200px] w-full !running-text    group bg-transparent  ",
        className
      )}
    >
      <textarea
        maxLength={maxLength}
        type='text'
        id={placeholder}
        value={value}
        className={cn(
          "block w-full h-[80px] pb-2  resize-none  peer px-5   mt-3 box-border !running-text   text-white rounded-[10px] bg-transparent cursor-pointer duration-300 transition-all !outline-none  !ring-none !ring-0  focus:!outline-none  focus:!ring-none focus:!ring-0  ",
          isComment && "h-16 !py-5",
          className,
          "h-[93%]"
        )}
        placeholder=' '
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setInFocus(true)}
        onBlur={() => setInFocus(false)}
      />

      <label
        className={cn(
          `absolute left-[9px]   running-text-mono   uppercase top-px !text-sm text-gray2 transition-all duration-300 px-1 transform -translate-y-[43%] pointer-events-none 
  peer-placeholder-shown:top-[27px]  font-medium peer-placeholder-shown:text-xl group-focus-within:!top-px group-focus-within:!text-sm group-focus-within:!text-irisPurpleLight group-focus-within:!text-[10px]`,
          value && "!text-[10px]"
        )}
      >
        {placeholder}
      </label>

      <fieldset
        className={cn(
          "inset-0 absolute  border running-text-mono   border-gray2 rounded-[10px] pointer-events-none mt-[-6px] invisible peer-placeholder-shown:visible group-focus-within:!border-irisPurpleLight group-focus-within:border-1 group-focus-within:rounded-[10px] group-hover:border-white transition-all duration-300 ",
          error &&
            "border-errorRed group-focus-within:!border-errorRed group-hover:!border-errorRed group-hover-within:text-[10px]"
        )}
      >
        <legend className='ml-2  !-mt-1 uppercase px-0 text-[10px] transition-all duration-300 invisible max-w-[0.01px] group-focus-within:max-w-full group-focus-within:px-[3px] whitespace-nowrap'>
          {placeholder}
        </legend>
      </fieldset>

      <fieldset
        className={cn(
          "inset-0 absolute  border running-text-mono   uppercase border-gray-400 rounded-[10px] pointer-events-none mt-[-6px] visible peer-placeholder-shown:invisible group-focus-within:border-1 group-focus-within:!border-irisPurpleLight group-hover:border-irisPurpleLight group-hover-within:text-[10px]",
          error &&
            "border-errorRed group-hover:!border-errorRed group-focus-within:!border-errorRed"
        )}
      >
        <legend className='ml-2  text-[10px] invisible px-[3px] uppercase   whitespace-nowrap group-hover-within:text-[10px]'>
          {placeholder}
        </legend>
      </fieldset>
    </div>
  );
}

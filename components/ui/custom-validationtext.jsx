import React from "react";

export default function CustomValidationtext({ validator, text }) {
  return (
    <div className='flex justify-start items-center gap-2'>
      <img
        src={validator ? "/Icons/Success.png" : "/Icons/Error.png"}
        alt='Validation'
        className='h-4 w-4 inline-block ml-2'
      />
      <span className={validator ? "text-successGreen" : "text-errorRed"}>
        {text}
      </span>
    </div>
  );
}

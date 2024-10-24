import { cn } from "@/lib/utils";
import Search from "./Icons/Search";
import { useState, useRef, useEffect } from "react";
import CancelSmall from "./Icons/CancelSmall";

export default function SearchInput({
  query,
  setQuery,
  className,
  placeholder = "SEARCH",
  autoFocus,
  inputClassName,
  iconClassName,
  onClick,
  triggerOnBlur,
  isSearchOpen = true,
}) {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState();
  const inputRef = useRef(null);
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus(); // Automatically focus the input field on mount
    }
  }, [autoFocus]);

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative h-[40px] search-input running-text-mono",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-y-0 inset-x-0 search-input md:right-auto start-0 flex items-center  ps-3 pointer-events-none",
          iconClassName
        )}
      >
        <Search className='h-5 w-5 opacity-70 fill-gray2' />
      </div>
      {(query || focused) && isSearchOpen && (
        <div
          className={cn(
            "absolute inset-y-0 inset-x-0  left-auto end-0 flex items-center  pe-4 ",
            iconClassName
          )}
        >
          <div className='bg-white hover:bg-gray1 active:bg-gray2  ease-animate h-4 w-4 flex items-center justify-center rounded-full'>
            <CancelSmall
              className={cn(
                "h-1.4 w-1.5 opacity-70 fill-gray2 cursor-pointer ease-animate ",
                query && "opacity-100"
              )}
              onClick={() => {
                setTimeout(() => {
                  triggerOnBlur(false);
                }, 500);
                setQuery("");
                setInput("");
                inputRef.current.blur();
              }}
            />
          </div>
        </div>
      )}
      <input
        ref={inputRef}
        type='text'
        id='default-search'
        className={cn(
          "block h-full uppercase search-input w-full p-4 ps-[38px] pe-[42px] md:text-sm md:placeholder:!text-sm placeholder:font-medium placeholder:opacity-100 text-white border border-gray3 rounded-[10px] bg-transparent hover:border-gray2 duration-300 transition-all focus:outline-0 focus:ring-offset-0 focus:outline-none focus:!ring-irisPurpleLight focus:!border-irisPurpleLight  placeholder:text-gray2 !outline-none !ring-0   ",
          input && "border-white",
          inputClassName
        )}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          if (triggerOnBlur && !query) {
            setFocused(false);
            triggerOnBlur(false);
          }
        }}
        placeholder={placeholder}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}

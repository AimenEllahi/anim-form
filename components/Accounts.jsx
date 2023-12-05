import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Accounts = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  useEffect(() => {
    // Close dropdown on route change
    setIsDropdownOpen(false);
  }, [router.pathname]); // Re-run effect when pathname changes

  return (
    <div className="relative inline-block text-left " ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md focus:outline-none hover:outline-none focus:bg-white focus:text-black hover:bg-white hover:text-black transition-colors duration-300"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Account
      </button>

      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-2 space-y-2 bg-[#4a4848] text-white text-center rounded-md shadow-md"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <Link
            href="/new-game"
            className="cursor-pointer block px-4 py-2 text-sm text-white hover:text-white hover:bg-green-500 focus:text-white"
            role="menuitem"
          >
            New Game
          </Link>
          <div className="border-t border-gray-700"></div>
          <div className="px-4 py-2 text-sm">Credits: 90</div>
          <Link
            href="/savegame"
            className="cursor-pointer block px-4 py-2 text-sm text-white hover:text-white hover:bg-green-500 focus:text-white"
            role="menuitem"
          >
            Save Games
          </Link>
          <Link
            href="/images"
            className="cursor-pointer block px-4 py-2 text-sm text-white hover:text-white hover:bg-green-500 focus:text-white"
            role="menuitem"
          >
            Images
          </Link>
          <Link
            href="/shop"
            className="cursor-pointer block px-4 py-2 text-sm text-white hover:text-white hover:bg-green-500 focus:text-white"
            role="menuitem"
          >
            Shop
          </Link>
          <Link
            href="/register"
            className="cursor-pointer block px-4 py-2 text-sm text-white hover:text-white hover:bg-green-500 focus:text-white"
            role="menuitem"
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Accounts;

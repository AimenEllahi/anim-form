import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import Button from "@/components/ui/custom-button";
import Cancel from "../ui/Icons/Cancel";
import { cn } from "@/lib/utils";
import CheckV2 from "../ui/Icons/CheckV2";
import Cookie from "universal-cookie";

// Language Object with Key-Value Pairs
const languages = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  pt: "Português",
  ru: "Русский",
  ko: "한국어",
  zh: "简体中文",
};

// Component
export default function LanguagePopup({ open, onClose }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const cookies = new Cookie();

  const handleLanguageSelect = (languageKey) => {
    setSelectedLanguage(languageKey);
    cookies.set("SelectedLanguage", languageKey, {
      path: "/",
      secure: true,
      sameSite: "Strict",
    });
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="bg-white/[8%] !rounded-[16px] !px-0 gap-0 text-white border border-white/10 !w-[352px] sm:min-w-[352px] running-text">
        <div className="flex p-6 pt-4 border-b border-white/10">
          <h2 className="running-text-large text-gray1">
            <p>Choose your language</p>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2 p-6">
          {Object.entries(languages).map(([key, name]) => (
            <Button
              key={key}
              onClick={() => handleLanguageSelect(key)}
              className={cn(
                "normal-case w-[144px] flex justify-start bg-transparent border-white/0 hover:cursor-pointer hover:border hover:border-white/10 hover:bg-white/8% active:bg-white/10",
                selectedLanguage === key && "bg-transparent border"
              )}
            >
              <span
                className={cn(
                  "running-text text-left",
                  selectedLanguage === key
                    ? "text-irisPurpleLight"
                    : "text-white"
                )}
              >
                {name}
              </span>
              {selectedLanguage === key && (
                <div className="w-4 h-4 opacity-100 flex ease-animate justify-center items-center p-[2px] rounded-full bg-irisPurpleLight">
                  <CheckV2 className="h-[7px] w-[9px] fill-russianViolet" />
                </div>
              )}
            </Button>
          ))}
        </div>

        <DialogFooter className="!flex gap-4 border-t border-white/10 p-6">
          <Button onClick={onClose}>
            <Cancel className="h-3 w-3 fill-white opacity-70" /> Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

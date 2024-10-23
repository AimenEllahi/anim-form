import React, { useEffect, useRef, useState } from "react";
import CustomIconbutton from "@/components/ui/custom-iconbutton";
import useGameStore from "@/utils/gameStore";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import Loader from "@/components/ui/Loader";
import Tab from "@/components/ui/Icons/Tab";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks"; // Added to handle line breaks correctly

// Text sizes for chatbox
const TEXT_SIZES = {
  17: "text-xs",
  18: "text-sm",
  19: "",
  20: "text-lg",
  21: "text-xl",
  22: "text-2xl",
};

// Function to intelligently split text into paragraphs using \n\n
const splitIntoParagraphs = (text) => {
  // Split by \n\n to create blocks of text, then strip excess whitespace
  const rawParagraphs = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  // If there are no paragraphs, return an empty array
  if (rawParagraphs.length === 0) return [];

  // Process each raw paragraph to further split into sentences if needed
  const paragraphs = rawParagraphs.map((paragraph) => {
    // Split by common sentence endings and strip excess whitespace
    const sentences = paragraph.split(/(?<=[.!?])\s+/);

    // Group sentences into paragraphs based on some logic
    const groupedSentences = [];
    let currentGroup = [];

    sentences.forEach((sentence) => {
      currentGroup.push(sentence.trim());

      // Example logic: every 3 sentences create a new paragraph
      if (currentGroup.length >= 3) {
        groupedSentences.push(currentGroup.join(" "));
        currentGroup = [];
      }
    });

    // Push any remaining sentences as the last group
    if (currentGroup.length > 0) {
      groupedSentences.push(currentGroup.join(" "));
    }

    // Return the formatted paragraph as a single string
    return groupedSentences.join("\n\n"); // Separate grouped sentences with double newlines
  });

  return paragraphs;
};


const TypingIndicator = () => {
  return (
    <div className='flex items-center space-x-1'>
      <div className='w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce'></div>
      <div className='w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-150'></div>
      <div className='w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-300'></div>
    </div>
  );
};

export default function Chatbox({
  chat,
  character,
  loading,
  textSize,
  setImageViewDialog,
  setInput,
  narrate,
  isImageLoading,
  setFocusTrigger,
}) {
  const { setGameImage } = useGameStore();
  const chatboxRef = useRef(null);
  const [isScrollLeft, setIsScrollLeft] = useState(false);

  useEffect(() => {
    if (chat.length === 1) return;

    const lastObj = chatboxRef.current.querySelector(".last-obj");
    const offsetPosition = lastObj.offsetTop - 20;

    const element = document.querySelector(".chat-box");

    element.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, [chat]);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position, height, and client height
      const { scrollHeight, scrollTop, clientHeight } = chatboxRef.current;
  
      // Check if the user has scrolled to the bottom
      const isAtBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 1;
  
      // Update the isScrollLeft state based on the scroll position
      setIsScrollLeft(!isAtBottom);
    };
  
    chatboxRef.current?.addEventListener("scroll", handleScroll);
  
    return () => {
      chatboxRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const handleViewImage = (url) => {
    setGameImage(url);
    setImageViewDialog(true);
  };

  const scrollToBottom = () => {
    chatboxRef.current.scrollTo({
      top: chatboxRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={chatboxRef}
      className={cn(
        "relative chat-box w-full lg:w-[65%] min-h-1/2 flex-1 overflow-y-scroll hide-scrollbar flex flex-col pb-40 pt-24 lg:py-12 lg:pt-32",
        narrate && "pb-48"
      )}
    >
      <div className='flex relative w-full flex-col justify-end mt-auto gap-8'>

        {chat.map((item, index) => {
          return item.type === "image" ? (
            <div
              key={index + "dnd-master-img"}
              className={cn(
                "h-[223px] w-full",
                index === chat.length - 1 && "last-obj"
              )}
            >
              <img
                onClick={() => handleViewImage(item.url)}
                src={item.url}
                className='h-full cursor-pointer object-contain rounded-[16px] border border-white/10 hover:shadow-custom-1 ease-animate'
              />
            </div>
          ) : (
            <div
              key={index + "dnd-master"}
              className={cn(
                "flex flex-col gap-4 justify-start items-start w-full",
                index === chat.length - 1 && "last-obj"
              )}
            >
              <div className={"flex gap-2 justify-start items-center"}>
                <CustomIconbutton variant={"primary"} className={"h-6 w-6"}>
                  <img
                    src={
                      item.type === "system"
                        ? "/Icons/logo-profile.svg"
                        : character?.personal?.portraitUrl ||
                          "/images/CreateCharacter/CharacterName/CharacterName.png"
                    }
                    alt='logo'
                    className='h-full w-full rounded-full object-cover'
                  />
                </CustomIconbutton>
                <span className={"running-text-mono uppercase text-gray2"}>
                  {item.type === "system"
                    ? "DNDAI Dungeon Master"
                    : character?.personal.name}
                </span>
              </div>

              {item.type === "system" ? (
                <>
                 {splitIntoParagraphs(item.text).map((paragraph, pIndex) => (
                <ReactMarkdown
                  key={pIndex}
                  className={cn(
                    "custom-markdown-text running-text text-white",
                    TEXT_SIZES[textSize]
                  )}
                  remarkPlugins={[remarkGfm, remarkBreaks]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    p: ({ node, children }) => (
                      <p className='mb-4 leading-relaxed text-gray-200'>
                        {children}
                      </p>
                    ),
                  }}
                >
                  {paragraph}
                </ReactMarkdown>
              ))}

                  <div
                    className={cn(
                      "flex flex-col gap-5 mt-8 md:gap-8",
                      TEXT_SIZES[textSize],
                      index !== chat.length - 1 &&
                        chat[chat.length - 1].type !== "image" &&
                        "pointer-events-none"
                    )}
                  >
                    {item?.choices?.map((choice, _index) => (
                      <div
                        key={_index + "dnd-master-choice"}
                        onClick={() => {
                          if (choice.title.toLowerCase() === "free choice") {
                            setInput("");
                          } else setInput(choice.title);
                          setFocusTrigger((prev) => !prev);
                        }}
                        className='flex transition-all ease-in-out hover:duration-300 active:duration-100 group cursor-pointer flex-col gap-2 md:gap-4'
                      >
                        <span
                          className={cn(
                            "flex group-hover:text-[#B1B2FF] group-active:text-white items-center gap-2 running-text-mono uppercase text-irisPurpleLight",
                            TEXT_SIZES[textSize]
                          )}
                        >
                          {choice.title}{" "}
                          <Tab className='min-h-5 min-w-5 fill-irisPurpleLight group-hover:fill-[#B1B2FF] group-active:fill-white' />
                        </span>
                        <span
                          className={cn(
                            "running-text group-hover:text-gray1 group-active:text-gray1",
                            TEXT_SIZES[textSize]
                          )}
                        >
                          {choice.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <span
                  className={cn(
                    "custom-markdown-text-player1 running-text text-white",
                    TEXT_SIZES[textSize]
                  )}
                >
                  {item.text}
                </span>
              )}
            </div>
          );
        })}

        {loading && (
          <div
            className={"flex flex-col gap-4 justify-start items-start w-full"}
          >
            <div className={"flex gap-2 justify-start items-center"}>
              <CustomIconbutton variant={"primary"} className={"h-6 w-6"}>
                <img
                  src={"/Icons/logo-profile.svg"}
                  alt='logo'
                  className='h-full w-full rounded-full object-cover'
                />
              </CustomIconbutton>
              <span className={"running-text-mono uppercase text-gray2"}>
                DNDAI Dungeon Master
              </span>
            </div>
            <TypingIndicator />
          </div>
        )}

        {isImageLoading && (
          <div className='relative h-[223px] w-fit rounded-[16px] overflow-hidden'>
            <Loader
              text='Weaving illusions...'
              className='absolute top-0 left-0 w-full h-full bg-blur flex items-center justify-center'
            />
            <img
              src='/images/CreateCharacter/CharacterName/CharacterName.png'
              alt='gradient'
              className='h-full object-contain'
            />
          </div>
        )}
      </div>
      <CustomIconbutton

      className={cn(
        "fixed left-1/2 transform -translate-x-1/2 z-10", // Base styles
        // Adjusting position based on screen size
        "bottom-[10rem] md:bottom-[15rem]", // Bottom position for desktop and mobile
        !isScrollLeft && "opacity-0 pointer-events-none", // Hide when scrolled to bottom
        narrate && "bottom-[13rem]" // Adjust position when narrating
      )}
      variant={"primary"}
      onClick={scrollToBottom}
      >
      <ArrowRight className='h-5 w-5 rotate-90 fill-russianViolet' />
      </CustomIconbutton>

    </div>
  );
}

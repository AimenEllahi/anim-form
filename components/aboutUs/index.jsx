import React from "react";
import ImgCard from "./imgCard";

export default function index() {
  return (
    <div className="h-full text-white w-full flex flex-col pt-[154px] md:pt-[128px] px-5 lg:px-12 pb-32">
      <div className="flex flex-col w-full gap-10 z-[10]">
        <div className="flex  justify-between text-white  w-full md:w-auto">
          <span className="headline-3 z-[10] hidden md:block ">About us</span>
        </div>
        <div className=" text-white capitalize  flex flex-col gap-8 justify-end items-end">
          <div className="flex flex-col gap-5 md:w-[711px] w-full">
            <span>
              Welcome to{" "}
              <span className="text-irisPurpleLight"> dndai.app!</span>
            </span>
            <p>
              Here at DNDAI, we’re on a quest to transform the way you
              experience storytelling and adventure! Imagine a world where your
              every move creates a new chapter, where epic quests and vibrant
              characters come to life before your eyes. That's the magic we're
              crafting—an interactive playground fueled by the power of AI.
            </p>
            <p>
              Our journey began in March 2023, inspired by the incredible
              potential of AI models like OpenAI's GPT. Picture this: a tiny
              prototype where the AI spun stories, conjured characters, and
              built worlds as you played. It was like witnessing a new universe
              being born right before us! The thrill of guiding players through
              a game that was being created in real-time was nothing short of
              epic.
            </p>
            <p>
              Driven by that electrifying experience, we set out to build
              something grander—a fully developed platform that could bring this
              adventure to friends around the globe. With no need for cumbersome
              installations, just pure, seamless fun!
            </p>
            <p>
              After a year and a half of relentless testing, tweaking, and
              transforming, we’re beyond excited to unveil Version 4.0. This
              update brings a treasure trove of enhancements, and we're eager to
              share it with you. We are excited that you check us out and are
              happy about any feedback or support!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full mt-[265px]">
          <span className="headline-3">Our Team</span>
          <div className="flex md:flex-row flex-col gap-4">
            <ImgCard
              src="/team/alex.png"
              name="Alexander Ksela"
              job="development"
            />
            <ImgCard src="/team/lucas.png" name="Lucas rossmann" job="design" />
            <ImgCard src="/team/aimen.png" name="aimen" job="development" />
          </div>
        </div>
      </div>
    </div>
  );
}
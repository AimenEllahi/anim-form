"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Faq() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [openQuestion, setOpenQuestion] = useState(null);

  const handleToggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "Why is the loading time so long?",
      answer:
        "To create the game and send user input, we use the GPT-4 API. The time it takes for these API calls to complete can range from 7 seconds to as long as 90 seconds.",
    },
    {
      question: "Why isn't my image being generated?",
      answer:
        "Because we're using the DALL-E API to create images, the safety rules are quite stringent. If the text in the game, especially after the 'VISUAL' line, contains explicit language or violent content, it will be flagged by the safety system and won't be used to generate images.",
    },
    {
      question: "Why do you have a Patreon?",
      answer:
        "Each time you use the GPT 4 API and DALLE API, it comes with a cost. We hope to make this more budget-friendly in the future. To ensure the continued operation of this game and website, we rely on donations.",
    },
    {
      question: "Who are you and why did you decide to create this?",
      answer:
        "I'm Alex, a 30-year-old gamer and a big fan of Dungeons & Dragons (D&D) from Austria. In February 2023, I had an idea for a project. With the help of a friend, we developed a D&D Solo Adventure that allows you to play D&D with an AI acting as the Game Master. Our friends loved it, so we decided to make it available online for everyone to enjoy. We created the entire project from our own place, without any external connections or financial support secured at this point.",
    },
  ];

  return (
    <div className='w-[70vw] mx-auto mt-10 mb-10 p-8 h-auto bg-[#4a4848] text-white rounded-md shadow-md font-sans'>
      <div data-aos='fade-up'>
        <h2 className='text-3xl font-semibold mb-4'>
          Frequently Asked Questions
        </h2>

        {questions.map((item, index) => (
          <div key={index} className='mb-6'>
            <div
              className='flex justify-between items-center cursor-pointer'
              onClick={() => handleToggleQuestion(index)}
            >
              <h3 className='text-xl mb-2'>{item.question}</h3>
              <span
                className={`text-[10px] transition-transform transform ${
                  openQuestion === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {openQuestion === index && (
              <div className='mb-6 bg-[#626060] p-4 rounded-md transition-max-height ease-in-out duration-5000 overflow-hidden'>
                <h3 className='text-xl font-semibold mb-2'>Answer:</h3>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;

import React from "react";

// Function to intelligently split text into paragraphs
const splitIntoParagraphs = (text) => {
  // Split by common sentence endings and strip excess whitespace
  const sentences = text.split(/(?<=[.!?])\s+/);

  // Group sentences into paragraphs based on some logic
  const paragraphs = [];
  let currentParagraph = [];

  sentences.forEach((sentence) => {
    currentParagraph.push(sentence.trim());

    // You can add additional logic here to decide when to create a new paragraph.
    // For example, if a sentence is longer than a certain length or contains specific keywords.
    if (currentParagraph.length >= 3) {
      // Example: every 3 sentences, create a new paragraph
      paragraphs.push(currentParagraph.join(" "));
      currentParagraph = [];
    }
  });

  // Push any remaining sentences as the last paragraph
  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph.join(" "));
  }

  return paragraphs;
};

export default function Details({ details, setting }) {
  return (
    <div className='flex flex-col md:flex-row gap-[20px] w-full details-section px-5 md:px-0'>
      <div className='md:w-1/2 flex flex-col gap-[16px]'>
        <div className='flex flex-col gap-[16px]'>
          <span className='running-text-mono text-gray2'>TIME</span>
          <p className='running-text'>{details.time}</p>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <span className='running-text-mono text-gray2'>PLOT</span>
          {splitIntoParagraphs(details.plot).map((paragraph, index) => (
            <p key={index} className='running-text'>
              {paragraph}
            </p>
          ))}
        </div>
        <div className='flex flex-col gap-[16px]'>
          <span className='running-text-mono text-gray2'>HOOK</span>
          {splitIntoParagraphs(details.hook).map((paragraph, index) => (
            <p key={index} className='running-text'>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className='md:w-1/2'>
        <div className='flex flex-col gap-[16px] items-start justify-start'>
          <span className='running-text-mono text-gray2'>SETTINGS</span>
          <span className='running-text md:hidden'>{setting}</span>

          <img
            src={`https://dzjg7lvewk7ln.cloudfront.net/settings/${setting
              .toLowerCase()
              .replaceAll(" ", "-")
              .replaceAll("'", "")}.webp`}
            title='setting icon'
            alt='settings icon'
            className='rounded-[16px] object-contain w-full'
          />
        </div>
      </div>
    </div>
  );
}

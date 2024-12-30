import React from "react";
import Card from "./card";

export default function Index({ dictionary }) {
  const GemsInfo = [
    {
      imgSrc: "https://dzjg7lvewk7ln.cloudfront.net/gems/legendary-gem.webp",
      info: (
        <span>
          <span className='text-sandyOrange'>{dictionary.legendary.title}</span>{" "}
          {dictionary.legendary.description}
        </span>
      ),
      benefits: dictionary.legendary.benefits,
    },
    {
      imgSrc: "https://dzjg7lvewk7ln.cloudfront.net/gems/mythic-gem.webp",
      info: (
        <span>
          <span className='text-irisPurpleLight'>
            {dictionary.mythic.title}
          </span>{" "}
          {dictionary.mythic.description}
        </span>
      ),
      benefits: dictionary.mythic.benefits,
    },
  ];
  return (
    <div className='z-10  w-full h-full flex flex-col md:gap-12 gap-10 md:flex-col text-white justify-center items-center md:mt-16'>
      <span className='text-center w-3/4 block text-white headline-3 z-[10] '>
        {dictionary.heresHow}{" "}
        <span className='text-irisPurpleLight'>{dictionary.gemsSystem}</span>{" "}
        {dictionary.works}.
      </span>
      <div className=' w-full grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {GemsInfo.map((gem, i) => (
          <Card key={i} benefits={gem.benefits} imgSrc={gem.imgSrc}>
            {gem.info}
          </Card>
        ))}
      </div>
    </div>
  );
}

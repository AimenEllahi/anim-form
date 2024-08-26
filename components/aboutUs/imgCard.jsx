import React from "react";

export default function imgCard({ src, name, job }) {
  return (
    <div className="flex flex-col gap-6 w-full  bg-transparent">
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover shadow-custom-1"
      />
      <div className="flex flex-col gap-3 bg-transparent">
        <span className="headline-4">{name}</span>
        <span className="running-text-mono text-irisPurpleLight uppercase">
          {job}
        </span>
      </div>
    </div>
  );
}

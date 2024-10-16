import React from "react";

export default function Note(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      id='Ebene_1'
      data-name='Ebene 1'
      baseProfile='tiny'
      version='1.2'
      viewBox='0 0 20 20'
      {...props}
    >
      <path
        d='M3,3v14h14V3H3ZM16,16H4V4h12v12ZM14,7H6v-1h8v1ZM14,10H6v-1h8v1ZM12,13h-6v-1h6v1Z'
        strokeWidth='0'
      />
    </svg>
  );
}

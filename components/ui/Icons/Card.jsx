import React from "react";

export default function Card(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
    >
      <path d='M2 4V16H18V4H2ZM17 15H3V10H17V15ZM17 7H3V5H17V7Z' />
    </svg>
  );
}

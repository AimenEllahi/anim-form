import React from "react";

export default function Game(props) {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M9 0L0 9L9 18L18 9L9 0ZM9.001 10.4619L4.7799 8.772L9.001 2.8589L13.2649 8.7973L9.001 10.4619ZM3.7245 8.5305L1.9041 8.5102L8.3154 2.0989L3.7245 8.5305ZM3.9072 9.5L8.5 11.3382V16.0858L1.9142 9.5H3.9072ZM9.5 11.339L14.1221 9.5H16.0858L9.5 16.0858V11.339ZM14.2829 8.5L9.6921 2.1063L16.0858 8.5H14.2829Z' />
    </svg>
  );
}

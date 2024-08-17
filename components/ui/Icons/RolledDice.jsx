import React from "react";

export default function RolledDice({ roll, className }) {
  switch (roll) {
    case 1:
      return (
        <svg
          id='Ebene_1'
          data-name='Ebene 1'
          xmlns='http://www.w3.org/2000/svg'
          baseProfile='tiny'
          version='1.2'
          viewBox='0 0 20 20'
          className={className}
        >
          <path d='M3,3v14h14V3H3ZM16,16H4V4h12v12ZM9,10c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1Z' />
        </svg>
      );
    case 2:
      return (
        <svg
          id='Ebene_1'
          data-name='Ebene 1'
          xmlns='http://www.w3.org/2000/svg'
          baseProfile='tiny'
          version='1.2'
          viewBox='0 0 20 20'
          className={className}
        >
          <path d='M3,3v14h14V3H3ZM16,16H4V4h12v12ZM12,13c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1ZM6,7c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1Z' />
        </svg>
      );
    case 3:
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          className={className}
        >
          <path d='M3 3v14h14V3H3zm13 13H4V4h12v12zM6 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0z' />
        </svg>
      );
    case 4:
      return (
        <svg
          id='Ebene_1'
          data-name='Ebene 1'
          xmlns='http://www.w3.org/2000/svg'
          baseProfile='tiny'
          version='1.2'
          viewBox='0 0 20 20'
          className={className}
        >
          <path d='M3,3v14h14V3H3ZM16,16H4V4h12v12ZM12,13c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1ZM6,13c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1ZM6,7c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1ZM12,7c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1Z' />
        </svg>
      );
    case 5:
      return (
        <svg
          id='Ebene_1'
          data-name='Ebene 1'
          xmlns='http://www.w3.org/2000/svg'
          baseProfile='tiny'
          version='1.2'
          viewBox='0 0 20 20'
          className={className}
        >
          <path d='M3,3v14h14V3H3ZM16,16H4V4h12v12ZM12,13c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1ZM6,13c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1ZM6,7c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1ZM9,10c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1ZM12,7c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1Z' />
        </svg>
      );
    case 6:
      return (
        <svg
          id='Ebene_1'
          data-name='Ebene 1'
          xmlns='http://www.w3.org/2000/svg'
          baseProfile='tiny'
          version='1.2'
          viewBox='0 0 20 20'
          className={className}
        >
          <path d='M3,3v14h14V3H3ZM16,16H4V4h12v12ZM6,13c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1ZM6,7c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1ZM6,10c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1ZM12,7c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1ZM12,10c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1ZM12,13c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1Z' />
        </svg>
      );
    default:
      return (
        <svg
          id='Ebene_1'
          data-name='Ebene 1'
          xmlns='http://www.w3.org/2000/svg'
          baseProfile='tiny'
          version='1.2'
          viewBox='0 0 20 20'
          className={className}
        >
          <path d='M3,3v14h14V3H3ZM16,16H4V4h12v12ZM9,10c0-.5523.4477-1,1-1s1,.4477,1,1-.4477,1-1,1-1-.4478-1-1Z' />
        </svg>
      );
  }
}

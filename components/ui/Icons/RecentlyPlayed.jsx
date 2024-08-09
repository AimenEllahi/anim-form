import React from "react";

export default function RecentlyPlayed(props) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17 10C17 13.866 13.866 17 10 17C6.134 17 3 13.866 3 10C3 8.84 3.287 7.749 3.786 6.786L4.536 7.536C4.195 8.289 4 9.122 4 10C4 13.308 6.692 16 10 16C13.308 16 16 13.308 16 10C16 6.692 13.308 4 10 4V6L7 3.5L10 1V3C13.866 3 17 6.134 17 10ZM9 7V10.207L11.646 12.853L12.353 12.146L9.999 9.792V6.999H8.999L9 7Z'
        fill='#9A9AC1'
      />
    </svg>
  );
}

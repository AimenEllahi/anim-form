import React from "react";

export default function Progress(props) {
  return (
    <svg viewBox="0 0 14 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 13L10 15.5L7 18V16C3.134 16 0 12.866 0 9C0 7.5787 0.4264 6.2583 1.1542 5.1542L1.883 5.8829C1.3267 6.7928 1 7.8576 1 9C1 12.3084 3.6916 15 7 15V13ZM7 2V0L4 2.5L7 5V3C10.3084 3 13 5.6916 13 9C13 10.1423 12.6733 11.2072 12.117 12.117L12.8458 12.8458C13.5737 11.7417 14 10.4214 14 9C14 5.134 10.866 2 7 2Z" />
    </svg>
  );
}

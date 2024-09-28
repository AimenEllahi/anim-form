import React from "react";

export default function Globe(props) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 0C3.5817 0 0 3.5817 0 8C0 12.4183 3.5817 16 8 16C12.4183 16 16 12.4183 16 8C16 3.5817 12.4183 0 8 0ZM7 14.9202C3.6135 14.4323 1 11.5194 1 8C1 7.3892 1.0867 6.7996 1.2344 6.2344L6 11V13H7V14.9202ZM13 12.8896V11H11V8H5V6H7V4H10.5V1.4695C13.1271 2.4789 15 5.0217 15 8C15 9.9019 14.2352 11.6268 13 12.8896Z" />
    </svg>
  );
}

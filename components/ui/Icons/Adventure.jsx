import React from "react";

export default function Adventure(props) {
  return (
    <svg
      data-name='Ebene 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      {...props}
    >
      <path d='M5.586 8.586 3 6V3h3l2.586 2.586-.707.707L5.586 4H4v1.586l2.293 2.293-.707.707ZM17 3v3l-8.257 8.257.792.793a1 1 0 0 1 0 1.414l-.707.707-2-2L4 18l-2-2 2.828-2.829-2-2 .707-.707a1 1 0 0 1 1.415 0l.793.793L14 3h3Zm-1 1h-1.586L6.45 11.964l1.585 1.586L16 5.586V4Zm-2.293 8.121L16 14.414V16h-1.586l-2.293-2.293-.707.707L14 17h3v-3l-2.586-2.586-.707.707Z' />
    </svg>
  );
}


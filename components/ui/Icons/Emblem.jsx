import React from "react";

export default function Emblem(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      baseProfile='tiny'
      version='1.2'
      viewBox='0 0 20 20'
      {...props}
    >
      <g>
        <g id='Ebene_1'>
          <path d='M17,2H4v5l5.9689,2.7549-.8107,2.6788h-4.1395l3.3973,2.3981-1.3133,4.1682,3.3979-2.5717,3.3981,2.5717-1.3152-4.1587,3.3978-2.4076h-4.1395l-.8107-2.6788,5.9689-2.7549V2ZM10,8.6678l-5-2.3077v-3.3601h5v5.6678ZM16,6.3602l-5,2.3077V3h5v3.3602Z' />
        </g>
      </g>
    </svg>
  );
}

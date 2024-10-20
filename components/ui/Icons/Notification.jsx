import React from "react";

export default function Notification(props) {
  return (
<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" baseProfile="tiny"  version="1.2" viewBox="0 0 20 20"      
 width={props.size || "20"} // use props to control size
  height={props.size || "20"}>
  <path d="M8,17h4c0,1.1046-.8954,2-2,2s-2-.8954-2-2ZM17,15v1H3v-1h1v-6c0-2.9722,2.1634-5.433,5-5.91v-1.09c0-.5523.4477-1,1-1s1,.4477,1,1v1.09c2.8366.477,5,2.9377,5,5.91v6h1ZM15,9c0-2.757-2.243-5-5-5s-5,2.243-5,5v6h10v-6Z"
   fill="#fff" 
   stroke-width="0"
   className='h-5 w-5'/>
</svg>
  );
}

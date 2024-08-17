import React from "react";

export default function Imprint() {
  return (
    <div className='h-full text-white w-full flex flex-col pt-[154px] md:pt-[128px] px-5 lg:px-12 pb-32'>
      <div className='flex flex-col w-full gap-10 z-[10]'>
        <div className='flex  justify-between text-white  w-full md:w-auto'>
          <span className='headline-3 z-[10] hidden md:block '>
            Imprint
          </span>
        </div>
        <div className=' text-white  flex flex-col gap-8 justify-center items-center'>
          <div className='flex flex-col gap-5 md:w-[711px] w-full'>
            <span className='running-text-large'>Contact</span>
            <p>
          <li>Company Name: dndai.app  </li> 
          <li>Address: Brockmanngasse 38, 8010 Graz, Austria  </li> 
          <li>Email: info@dndai.app  </li> 
          <li>Owner: Alexander Ksela </li> 
          <li>VAT ID Number: ATU80853603 </li> 
            {" "}
            </p>         
          </div>
        </div>
      </div>
    </div>
  );
}

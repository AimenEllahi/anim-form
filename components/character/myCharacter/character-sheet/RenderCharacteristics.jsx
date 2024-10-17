import React from "react";
import { cn } from "@/lib/utils";
const RenderCharacteristics = ({
  title,
  data,
  className,
  containerClassName,
}) => {
  return (
    <div
      className={cn(
        " h-fit  overflow-hidden py-4 px-5 bg-white/10 border border-white/10 rounded-[16px]",
        className
      )}
    >
      <div className=' flex flex-col gap-5'>
        <span className='running-text-large  w-full truncate'>{title}</span>
        <div className='flex gap-8'>
          <div className={cn("flex flex-col gap-6", containerClassName)}>
            {data.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className='flex flex-col justify-center items-start gap-3 '
              >
                <span className='text-gray2 description uppercase'>
                  {item.key}
                </span>
                <span className='running-text '>{item.value}</span>
              </div>
            ))}
          </div>
          {data.length > 5 && (
            <div className={cn("flex flex-col gap-6", containerClassName)}>
              {data.slice(5).map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col justify-center items-start gap-3 '
                >
                  <span className='text-gray2 description uppercase'>
                    {item.key}
                  </span>
                  <span className='running-text '>{item.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default RenderCharacteristics;

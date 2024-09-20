"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/custom-button";
import { cn } from "@/lib/utils";

export default function Card({ article, className }) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/article/${article.id}`);
  };

  return (
    <div
      className={cn(
        "rounded-[16px] cursor-pointer bg-white/[8%] hover:bg-white/10 h-full group hover:!shadow-custom-1 min-w-[292px] w-[292px] max-w-[292px] ease-animate overflow-hidden md:min-w-[345px] md:w-[345px] border-white/[8%] border hover:border-white/20 running-text-mono",
        className
      )}
      onClick={handleRedirect}
    >
      <div className='w-full h-full flex flex-col'>
        <div className='relative'>
          <img
            src={article.imageUrl || "/images/default_article.jpg"}
            alt='Article Image'
            className='h-[248px] w-full object-cover'
          />
        </div>
        <div className='flex flex-col h-full justify-between flex-1 p-5 gap-2'>
          <div className='flex flex-col justify-around'>
            <span className='mb-2 h-9 overflow-hidden md:h-12 ellipsis headline-4 text-white break-words whitespace-pre-line'>
              {article.title}
            </span>
            <span className='h-16 overflow-hidden text-gray2 running-text-small break-words whitespace-pre-line ellipsis'>
              {article.description}
            </span>
          </div>
          <div className='flex justify-end items-center gap-5 mt-auto text-white'>
            <Button onClick={handleRedirect} className='prevent-redirect'>
              <span className='prevent-redirect'>Read More</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
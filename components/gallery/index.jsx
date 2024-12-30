import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Like from "../ui/Icons/Like";

import CustomDropdown from "@/components/ui/custom-dropdown";
import { cn } from "@/lib/utils";
import CustomIconbutton from "@/components/ui/custom-iconbutton";
import Download from "@/components/ui/Icons/Download";
import { useRouter } from "next/navigation";
import CustomButton from "../ui/custom-button";
import ArrowRight from "../ui/Icons/ArrowRight";
import ArrowLeft from "../ui/Icons/ArrowLeft";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Image from "./image";
import useUserStore from "@/utils/userStore";
import useCustomToast from "@/hooks/useCustomToast";
import { invoke } from "lodash";
import { likeImage, unlikeImage } from "@/actions/user";

const GalleryImage = ({ img, className, dictionary }) => {
  const [open, setOpen] = useState(false);
  const [likedBy, setLikedBy] = useState(img?.likedBy || []);
  const [loading, setLoading] = useState(false);

  let src = img.url;
  const { user } = useUserStore();

  const downloadImage = () => {
    // download image
    const a = document.createElement("a");
    a.href = src;
    //new tab
    a.target = "_blank";
    a.download = "image.jpg";
    a.click();
  };

  const handleLikeImage = async () => {
    try {
      console.log(user);
      if (!user?.token) return;
      setLoading(true);

      const updatedImage = await likeImage(user._id, img._id);

      setLikedBy(updatedImage.likedBy);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen, e) => {
        if (!isOpen) {
          setOpen(isOpen);
        }
      }}
    >
      <div className={cn("relative  group", className)}>
        <CustomIconbutton
          disabled={loading}
          onClick={downloadImage}
          className={
            "absolute top-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto right-4  bg-blur"
          }
        >
          <Download className='h-5 w-5 fill-white' />
        </CustomIconbutton>
        {user?.token && (
          <CustomIconbutton
            disabled={loading || likedBy.includes(user._id)}
            onClick={handleLikeImage}
            className={
              "absolute top-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto right-16  bg-blur"
            }
          >
            <Like
              isfilled={likedBy.includes(user._id)}
              className='h-5 w-5 fill-white'
            />
          </CustomIconbutton>
        )}
        <div
          className={
            "absolute flex justify-center items-center gap-2 bottom-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto right-[43%]"
          }
        >
          <Like isfilled={"true"} className='h-5 w-5 fill-white' />
          <span className='running-text-mono'>{likedBy?.length || 0}</span>
        </div>
        <img
          onClick={() => setOpen(true)}
          src={src}
          alt='arrow down icon, to download'
          title='Arrow icon'
          className={cn(
            "rounded-[16px] border h-full w-full border-transparent   hover:border-white/10 hover:shadow-custom-2 ease-animate cursor-pointer"
          )}
        />
      </div>

      <Image
        isLiked={likedBy.includes(user._id)}
        dictionary={dictionary}
        setOpen={setOpen}
        image={src}
        likes={likedBy?.length || 0}
      />
    </Dialog>
  );
};
export default function Gallery({
  images,
  totalPages,
  selectedOption,
  setSelectedOption,
  SORT_BY_OPTIONS,
  totalRecords,
  dictionary,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const pathname = usePathname();
  const isGallery = pathname.includes("/discover/gallery");
  const renderImages = () => {
    if (!images) return null;

    const rows = [];
    let index = 0;

    while (index < images.length) {
      // Row 1: 4 images with col-span-2 and row-span-2
      if (rows.length % 5 === 0) {
        const rowImages = images.slice(index, index + 4);
        rows.push(
          <div
            className='grid grid-cols-4 md:grid-cols-8 gap-4'
            key={index + Math.random()}
          >
            {rowImages.map((src, i) => (
              <GalleryImage
                dictionary={dictionary}
                img={src}
                likes={src.likedBy || []}
                alt='user generated image from the story'
                className='col-span-2 row-span-2'
                key={src.url}
              />
            ))}
          </div>
        );
        index += 4;
      }
      // Row 2: 2 images with col-span-4 and row-span-4
      else if (rows.length % 5 === 1) {
        const rowImages = images.slice(index, index + 2);
        rows.push(
          <div
            className='grid grid-cols-4 md:grid-cols-8 gap-4'
            key={index + Math.random()}
          >
            {rowImages.map((src, i) => (
              <GalleryImage
                dictionary={dictionary}
                img={src}
                likes={src.likedBy || []}
                alt='user generated image from the story'
                className='col-span-4 row-span-4'
                key={src.url}
              />
            ))}
          </div>
        );
        index += 2;
      }
      // Row 3: First image with col-span-4 and row-span-4, then 4 images with col-span-2 and row-span-2
      else if (rows.length % 5 === 2) {
        const rowImages = images.slice(index, index + 4);
        rows.push(
          <div
            className='grid grid-cols-4 md:grid-cols-8 gap-4'
            key={index + Math.random()}
          >
            {rowImages.map((src, i) => (
              <GalleryImage
                dictionary={dictionary}
                img={src}
                likes={src.likedBy || []}
                alt='user generated image from the story'
                className='col-span-2 row-span-2'
                key={src.url}
              />
            ))}
          </div>
        );
        index += 4;
      }
      // Row 4: 4 images with col-span-2 and row-span-2
      else if (rows.length % 5 === 3) {
        const firstImage = images[index];
        const nextFourImages = images.slice(index + 1, index + 5);
        rows.push(
          <div
            className='grid grid-cols-4 md:grid-cols-8 gap-4'
            key={index + Math.random()}
          >
            <GalleryImage
              dictionary={dictionary}
              img={firstImage}
              likes={firstImage.likedB}
              alt='user generated image from the story'
              className='col-span-4 row-span-4'
              key={firstImage.url}
            />
            {nextFourImages.map((src, i) => (
              <GalleryImage
                dictionary={dictionary}
                img={src}
                likes={src.likedBy || []}
                alt='user generated image from the story'
                className='col-span-2 row-span-2'
                key={src.url}
              />
            ))}
          </div>
        );
        index += 5;
      }
      // Row 5: 4 images with col-span-2 and row-span-2
      else if (rows.length % 5 === 4) {
        const rowImages = images.slice(index, index + 4);
        rows.push(
          <div
            className='grid grid-cols-4 md:grid-cols-8 gap-4'
            key={index + Math.random()}
          >
            {rowImages.map((src, i) => (
              <GalleryImage
                dictionary={dictionary}
                img={src}
                likes={src.likedBy || []}
                alt='user generated image from the story'
                className='col-span-2 row-span-2'
                key={src.url}
              />
            ))}
          </div>
        );
        index += 4;
      }
    }

    return rows;
  };

  const nextPage = () => {
    const newPage = page + 1;
    router.replace(pathname + `?page=${newPage}`);
  };

  const prevPage = () => {
    const newPage = page - 1;
    router.replace(pathname + `?page=${newPage}`);
  };

  return (
    <div className='h-full  text-white w-full flex flex-col pt-[154px] md:pt-[9rem] px-5 lg:px-12 pb-32 '>
      <div className='flex flex-col w-full gap-2.5'>
        <div className=' flex justify-between text-white  z-[10]  w-full md:w-auto'>
          {/* desktop */}
          <span className='headline-3 z-[10] hidden md:block '>
            {isGallery ? dictionary.gallery : dictionary.myImages}

            <span className='text-gray2 ms-3 md:ms-4 font-roboto-mono transform translate-up text-[17px] md:text-[24px] translate-y-[-15px] md:translate-y-[-20px]'>
              ({totalRecords})
            </span>
          </span>

          <CustomDropdown
            placeholder={dictionary.sortBy}
            selectedOption={SORT_BY_OPTIONS[selectedOption]}
            setSelectedOption={(option) => {
              setSelectedOption(
                Object.keys(SORT_BY_OPTIONS).find(
                  (key) => SORT_BY_OPTIONS[key] === option
                )
              );
            }}
            options={Object.entries(SORT_BY_OPTIONS).map(
              ([key, value]) => value
            )}
            className={"w-full max-w-full md:max-w-[fit-content] md:!w-auto"}
          />
        </div>

        <div className='w-full my-4 z-[9] '>
          <div className='image-grid space-y-4'>{renderImages()}</div>
        </div>
        {totalPages > 1 && (
          <div className='flex justify-center relative  items-center  flex-col md:flex-row gap-6 z-10'>
            <span className='text-gray2 left md:absolute left-0 running-text-mono uppercase'>
              {dictionary.page} {page} {dictionary.of} {totalPages}{" "}
            </span>
            <div className='flex items-center gap-6'>
              <CustomButton
                onClick={prevPage}
                disabled={page === 1}
                variant={"subtle"}
                withIcon={true}
              >
                <ArrowLeft className='h-5 w-5 fill-white opacity-70' />
                {dictionary.back}
              </CustomButton>
              <CustomButton
                onClick={nextPage}
                disabled={page === totalPages}
                withIcon={true}
                variant='primary'
              >
                {dictionary.nextPage}
                <ArrowRight className='h-5 w-5 fill-russianViolet' />
              </CustomButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

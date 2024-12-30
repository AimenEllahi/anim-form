"use client";
import React, { useEffect, useState, Suspense } from "react";
import Gallery from "@/components/gallery/index";
import { getImages, getPublicImages } from "@/actions/user";
import Loader from "@/components/ui/Loader";
import useUserStore from "@/utils/userStore";
import { useRouter } from "next/navigation";
import useCustomToast from "@/hooks/useCustomToast";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

function GalleryContainer({ dictionary }) {
  const SORT_BY_OPTIONS = {
    "Newest to Oldest": dictionary.newestToOldest,
    "Oldest to Newest": dictionary.oldestToNewest,
    "Most Liked": dictionary.mostLiked,
  };
  const [images, setImages] = useState();
  const { user, setTotalPublicImages } = useUserStore();
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [selectedOption, setSelectedOption] = useState("Newest to Oldest");
  const router = useRouter();
  const { invokeToast } = useCustomToast();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const page = parseInt(searchParams.get("page")) || 1;

  const handleGetImages = async () => {
    try {
      const response = await getPublicImages(page, selectedOption);
      setImages(response.images);
      setTotalPages(response.totalPages);
      setTotalRecords(response.totalRecords);
      setTotalPublicImages(response.totalRecords);
    } catch (error) {
      invokeToast(error?.response?.data || "Error fetching images", "Error");
      setImages([]);
      setTotalPages(1);
      setTotalPublicImages(0);
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    handleGetImages();
  }, [page, selectedOption]);

  if (!searchParams.get("page")) {
    router.push(pathname + "?page=1");
  }
  if (!images) return <Loader text={dictionary.loadingImages} />;
  return (
    <Gallery
      dictionary={dictionary}
      images={images}
      totalPages={totalPages}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      SORT_BY_OPTIONS={SORT_BY_OPTIONS}
      totalRecords={totalRecords}
    />
  );
}

export default function page({ dictionary }) {
  return (
    <Suspense>
      <GalleryContainer dictionary={dictionary} />
    </Suspense>
  );
}

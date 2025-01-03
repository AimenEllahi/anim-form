"use client";
import React, { useEffect, useState, Suspense } from "react";
import Gallery from "@/components/gallery/index";
import { getImages } from "@/actions/user";
import Loader from "@/components/ui/Loader";
import useUserStore from "@/utils/userStore";
import { useRouter } from "next/navigation";
import useCustomToast from "@/hooks/useCustomToast";
import { useSearchParams } from "next/navigation";
const SORT_BY_OPTIONS = ["Newest to Oldest", "Oldest to Newest"];

function GalleryContainer() {
  const [images, setImages] = useState();
  const { user, setTotalImages } = useUserStore();
  const [totalPages, setTotalPages] = useState(1);
  const [selectedOption, setSelectedOption] = useState("Newest to Oldest");
  const [totalRecords, setTotalRecords] = useState(0);
  const router = useRouter();
  const { invokeToast } = useCustomToast();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page")) || 1;

  const handleGetImages = async () => {
    try {
      //  console.log("here");
      const isReverse = selectedOption === SORT_BY_OPTIONS[1];
      const response = await getImages(user.token, page, isReverse);
      //  console.log(response);
      setImages(response.images);
      setTotalPages(response.totalPages);
      setTotalRecords(response.totalRecords);
      setTotalImages(response.totalRecords);
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error fetching images",
        "Error"
      );
      setImages([]);
      setTotalPages(1);
      setTotalImages(0);
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // console.log(user?.token);
    if (user?.token) handleGetImages();
  }, [user?.token, page, selectedOption]);

  if (!searchParams.get("page")) {
    router.push("/my-account/gallery?page=1");
  }
  if (!images) return <Loader text="Loading Images..." />;
  return (
    <Gallery
      images={images}
      totalPages={totalPages}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      SORT_BY_OPTIONS={SORT_BY_OPTIONS}
      totalRecords={totalRecords}
    />
  );
}

export default function page() {
  return (
    <Suspense>
      <GalleryContainer />
    </Suspense>
  );
}

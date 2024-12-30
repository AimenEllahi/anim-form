"use client";
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { continueWithGoogle } from "@/actions/auth";
import Cookie from "universal-cookie";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/ui/custom-button";
import useCustomToast from "@/hooks/useCustomToast";
import useUserStore from "@/utils/userStore";
import { useSearchParams } from "next/navigation";

export default function GoogleAuth({ isLoading, setIsLoading, dictionary }) {
  const router = useRouter();
  const { invokeToast } = useCustomToast();
  const { setUser } = useUserStore();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");
  const id = searchParams.get("id");

  const cookies = new Cookie();
  const handleContinueWithGoogle = async (user) => {
    try {
      setIsLoading(true);
      const data = await continueWithGoogle(user);
      setUser(data);

      cookies.set("token", data.token, { path: "/" });

      invokeToast("Login Successful", "Success");
      if (redirect) {
        router.push(redirect + (id ? `?id=${id}` : ""));
      } else {
        router.push("/discover");
      }
    } catch (error) {
      invokeToast(error?.response?.data?.message || "Error", "Error");
      //  console.log("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const login_action = useGoogleLogin({
    onSuccess: async (user) => {
      await handleContinueWithGoogle(user);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <CustomButton
      disabled={isLoading}
      variant={"primary"}
      onClick={login_action}
    >
      <img
        src='/Icons/Google.png'
        title='Google Icon'
        alt='Logo of the Google company'
      />
      {dictionary}
    </CustomButton>
  );
}

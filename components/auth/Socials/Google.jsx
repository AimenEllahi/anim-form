"use client";
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { continueWithGoogle, getUserData } from "@/actions/auth";
import Cookie from "universal-cookie";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/ui/custom-button";
export default function GoogleAuth({ isLoading, setIsLoading }) {
  const router = useRouter();
  //const setUser = useUserStore((state) => state.setUser);

  const cookies = new Cookie();
  const handleContinueWithGoogle = async (user) => {
    try {
      setIsLoading(true);
      const data = await continueWithGoogle(user);
      setUser(data);

      cookies.set("token", data.token, { path: "/" });
      toast.success("Login Successful");
      router.push("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Some error occurred");
      console.log("An error occurred:", error);
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
      <img src="/Icons/Google.png" alt="" />
      CONTINUE WITH GOOGLE
    </CustomButton>
  );
}

"use client";
import React, { useState } from "react";
import CustomInput from "../ui/custom-input";
import CustomButton from "../ui/custom-button";
import Link from "next/link";

export default function newPass() {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className=" text-white h-auto w-[345px]  flex flex-col justify-between items-start gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="running-text-large">Enter your new password</h1>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <CustomInput
          placeholder="NEW PASSWORD"
          onChange={(value) => setPassword(value)}
          value={password}
          type={isPasswordVisible ? "text" : "password"}
          icon={
            <img
              onClick={togglePasswordVisibility}
              src={
                isPasswordVisible ? "/Icons/Eye.svg" : "/Icons/EyeClosed.svg"
              }
              alt="Toggle Password Visibility"
              className="h-5 w-5 invert cursor-pointer "
            />
          }
        />
        <CustomInput
          placeholder="CONFIRM PASSWORD"
          onChange={(value) => setPassword(value)}
          value={password}
          type={isPasswordVisible ? "text" : "password"}
          icon={
            <img
              onClick={togglePasswordVisibility}
              src={
                isPasswordVisible ? "/Icons/Eye.svg" : "/Icons/EyeClosed.svg"
              }
              alt="Toggle Password Visibility"
              className="h-5 w-5 invert cursor-pointer "
            />
          }
        />
        <CustomButton variant={"primary"} className={"font-bold"}>
          RESET PASSWORD
        </CustomButton>
        <div className="w-full flex flex-col gap-4 ">
          <Link href="/" className="running-text-small">
            Back to sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

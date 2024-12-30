"use client";
import React, { useState } from "react";
import CustomInput from "@/components/ui/custom-input";
import CustomButton from "@/components/ui/custom-button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { resetPassword } from "@/actions/auth";
import { isPasswordValid } from "@/lib/Helpers/auth";
import CustomValidationtext from "@/components/ui/custom-validationtext";
import useCustomToast from "@/hooks/useCustomToast";
import { useRouter } from "next/navigation";
export default function newPass({ dictionary }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { invokeToast } = useCustomToast();
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };
  // Get the validation result for the current password
  const passwordValidation = isPasswordValid(password);

  const handlePasswordReset = async () => {
    try {
      setIsLoading(true);
      const response = await resetPassword(password, token);
      //   console.log(response);
      invokeToast("Password Reset Successful", "Success");
      router.push("/auth/pass-changed");
    } catch (error) {
      //  console.log(error);
      invokeToast(
        error?.response?.data?.message || "Something Went Wrong",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=' text-white h-auto w-[345px]  flex flex-col justify-between items-start gap-8 z-[10]'>
      <div className='flex flex-col gap-4'>
        <h1 className='running-text-large'>{dictionary.enterNewPass}</h1>
      </div>
      <div className='flex flex-col gap-6 w-full'>
        <div className='flex flex-col gap-3'>
          <CustomInput
            placeholder={dictionary.newPassword}
            onChange={(value) => setPassword(value)}
            value={password}
            type={isPasswordVisible ? "text" : "password"}
            error={
              password.length > 0 &&
              (!passwordValidation.hasMinLength ||
                !passwordValidation.hasNumber ||
                !passwordValidation.hasSpecialChar)
            }
            onFo
            icon={
              <img
                onClick={togglePasswordVisibility}
                src={
                  isPasswordVisible ? "/Icons/Eye.svg" : "/Icons/EyeClosed.svg"
                }
                title='Show password icon'
                alt='Toggle Password Visibility'
                className='h-5 w-5 invert cursor-pointer '
              />
            }
          />

          {password.length > 0 && (
            <ul>
              <CustomValidationtext
                text={dictionary.charactersWarning}
                validator={passwordValidation.hasMinLength}
              />
              <CustomValidationtext
                text={dictionary.containsNumber}
                validator={passwordValidation.hasNumber}
              />
              <CustomValidationtext
                text={dictionary.containsASpecialCharacter}
                validator={passwordValidation.hasSpecialChar}
              />
            </ul>
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <CustomInput
            placeholder={dictionary.confirmPassword}
            onChange={(value) => setConfirmPassword(value)}
            value={confirmPassword}
            type={isConfirmPasswordVisible ? "text" : "password"}
            icon={
              <img
                onClick={toggleConfirmPasswordVisibility}
                src={
                  isConfirmPasswordVisible
                    ? "/Icons/Eye.svg"
                    : "/Icons/EyeClosed.svg"
                }
                title='Show password icon'
                alt='Toggle Password Visibility'
                className='h-5 w-5 invert cursor-pointer '
              />
            }
          />
          {
            // Show the validation text only if the password is not empty
            password && confirmPassword && password !== confirmPassword && (
              <CustomValidationtext
                text={dictionary.passwordsDoNotMatch}
                validator={password === confirmPassword}
              />
            )
          }
        </div>
        <CustomButton
          variant={"primary"}
          className={"font-bold"}
          onClick={handlePasswordReset}
          disabled={
            isLoading ||
            !passwordValidation.hasSpecialChar ||
            !passwordValidation.hasNumber ||
            !passwordValidation.hasMinLength ||
            password !== confirmPassword
          }
        >
          {isLoading ? dictionary.loading : dictionary.resetPassword}
        </CustomButton>
        <div className='w-full flex flex-col gap-4 '>
          <Link href='/auth/sign-up' className='running-text-small'>
            {dictionary.backToSignUp}
          </Link>
        </div>
      </div>
    </div>
  );
}

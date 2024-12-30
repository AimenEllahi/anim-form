import React, { useEffect, useState } from "react";
import CustomInput from "../../ui/custom-input";
import CustomButton from "../../ui/custom-button";
import { Checkbox } from "../../ui/checkbox";
import {
  register,
  verifyEmailExists,
  verifyUserNameExists,
} from "@/actions/auth";
import useCustomToast from "@/hooks/useCustomToast";
import { isPasswordValid } from "@/lib/Helpers/auth";
import CustomValidationtext from "@/components/ui/custom-validationtext";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchParams } from "next/navigation";

export default function Step2({ setStep, user, setUser, reset, dictionary }) {
  const router = useRouter();
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const { invokeToast } = useCustomToast();
  const [agreeTOC, setAgreeTOC] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const debounceUsername = useDebounce(user.username, 150);
  const [usernameExists, setUsernameExists] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");
  const id = searchParams.get("id");
  useEffect(() => {
    const checkUsername = async () => {
      try {
        const exists = await verifyUserNameExists(debounceUsername);
        //   console.log(exists);
        setUsernameExists(exists);
      } catch (error) {
        invokeToast(
          error?.response?.data?.message || "Something Went Wrong",
          "error"
        );
      }
    };
    if (debounceUsername?.length > 2) checkUsername();
  }, [debounceUsername]);

  const onChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };
  const invalidData = () => {
    return (
      user.username.length < 3 ||
      user.name.length < 2 ||
      user.surname.length < 2 ||
      user.password.length < 8 ||
      !agreeTOC
    );
  };

  const handleCreateAccount = async () => {
    try {
      setIsLoading(true);
      const response = await register({
        name: user.name + " " + user.surname,
        username: user.username,
        email: user.email,
        password: user.password,
      });

      router.push(
        "/auth/sign-up/email-confirmation" +
          (redirect ? `?redirect=${redirect}&&id=${id}` : "")
      );
      reset();
    } catch (error) {
      invokeToast(
        error?.response?.data?.message || "Something Went Wrong",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Get the validation result for the current password
  const passwordValidation = isPasswordValid(user.password);

  return (
    <div className='w-full  h-full md:h-auto flex flex-col gap-6 pt-[94px] md:pt-0'>
      <div>
        <CustomInput
          placeholder={dictionary.username}
          value={user.username}
          onChange={(value) => onChange("username", value)}
          error={usernameExists}
          onFocus={() => setUsernameFocused(true)}
          onBlur={() => setUsernameFocused(false)}
          icon={
            !usernameExists &&
            user.username.length > 2 && (
              <img
                src='/Icons/Success.svg'
                title='Success Icon'
                alt='Success'
                className=' h-5 w-5'
              />
            )
          }
        />
        {usernameExists && user.username.length > 2 && (
          <CustomValidationtext
            validator={!usernameExists}
            text={dictionary.usernameAlready}
          />
        )}
      </div>
      <CustomInput
        placeholder={dictionary.email}
        value={user.email}
        disabled
        onChange={(value) => {}}
        icon={
          user.email && (
            <img
              src='/Icons/Success.svg'
              title='Sucess Icon'
              alt='Success'
              className=' h-5 w-5'
            />
          )
        }
      />
      <CustomInput
        placeholder={dictionary.name}
        value={user.name}
        onChange={(value) => onChange("name", value)}
        icon={
          user.name.length > 2 && (
            <img
              src='/Icons/Success.svg'
              title='Sucess Icon'
              alt='Success'
              className=' h-5 w-5'
            />
          )
        }
      />
      <CustomInput
        placeholder={dictionary.surname}
        value={user.surname}
        onChange={(value) => onChange("surname", value)}
        icon={
          user.surname.length > 2 && (
            <img
              src='/Icons/Success.svg'
              title='Sucess Icon'
              alt='Success'
              className=' h-5 w-5'
            />
          )
        }
      />
      <div className='flex flex-col gap-3'>
        <CustomInput
          placeholder={dictionary.password}
          value={user.password}
          type={showPassword ? "text" : "password"}
          onChange={(value) => onChange("password", value)}
          className={`
            ${isPasswordFocused ? "border-irisPurpleLight" : "border-gray2"}
          `}
          icon={
            showPassword ? (
              <img
                src='/Icons/Eye.svg'
                onClick={() => setShowPassword(false)}
                title='Sucess Icon'
                alt='Success'
                className=' h-5 w-5 cursor-pointer invert'
              />
            ) : (
              <img
                src='/Icons/EyeClosed.svg'
                onClick={() => setShowPassword(true)}
                title='Sucess Icon'
                alt='Success'
                className=' h-5 w-5 cursor-pointer invert'
              />
            )
          }
          error={
            user.password.length > 0 &&
            (!passwordValidation.hasMinLength ||
              !passwordValidation.hasNumber ||
              !passwordValidation.hasSpecialChar)
          }
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />
        {user.password.length > 0 && (
          <div>
            <CustomValidationtext
              validator={passwordValidation.hasMinLength}
              text={dictionary.charactersWarning}
              isPassword
            />
            <CustomValidationtext
              validator={passwordValidation.hasNumber}
              text={dictionary.containsNumber}
              isPassword
            />
            <CustomValidationtext
              validator={passwordValidation.hasSpecialChar}
              text={dictionary.containsASpecialCharacter}
              isPassword
            />
          </div>
        )}
      </div>
      <div className='flex w-full justify-center items-center gap-3'>
        <Checkbox
          checked={agreeTOC}
          onCheckedChange={(value) => setAgreeTOC(value)}
          className='border border-irisPurpleLight h-[20px] w-[20px]'
        />
        <span className='text-white running-text-small  text-left'>
          {dictionary.bySelecting}{" "}
          <span className='text-irisPurpleLight'>
            {dictionary.termsAndConditions}{" "}
          </span>
          {dictionary.youCanRead}{" "}
          <span className='text-irisPurpleLight'>
            {dictionary.privacyPolicy}.
          </span>
        </span>
      </div>
      <div className='w-full'>
        <CustomButton
          variant={"primary"}
          disabled={invalidData() || isLoading}
          onClick={handleCreateAccount}
          className={"w-full font-bold"}
        >
          {isLoading ? (
            dictionary.loading
          ) : (
            <>
              {dictionary.createAccount}{" "}
              <img
                src='/Icons/ArrowRight.svg'
                title='Arrow Icon'
                alt='Arrow pointing right'
                className='h-5 w-5'
              />
            </>
          )}
        </CustomButton>
      </div>
    </div>
  );
}

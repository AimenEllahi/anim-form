import React, { useState } from "react";
import CustomInput from "../../ui/custom-input";
import CustomButton from "../../ui/custom-button";
import { Checkbox } from "../../ui/checkbox";
import { register } from "@/actions/auth";
import useCustomToast from "@/hooks/useCustomToast";
import { isPasswordValid } from "@/lib/helpers";
export default function Step2({ setStep, user, setUser, reset }) {
  const { invokeToast } = useCustomToast();

  const onChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTOC, setAgreeTOC] = useState(false);
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
      console.log(response);
      invokeToast(
        "A verification email has been sent to your email",
        "Success",
        <img
          src='/Icons/ArrowRight.svg'
          alt='Success'
          className='h-5 w-5 invert'
        />,
        "Sign In",
        "/auth/sign-in"
      );
      setUser({
        username: "",
        email: "",
        name: "",
        surname: "",
        password: "",
      });
      reset();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  // Get the validation result for the current password
  const passwordValidation = isPasswordValid(user.password);

  return (
    <div className='w-full h-auto flex flex-col gap-6'>
      <CustomInput
        placeholder='USERNAME'
        value={user.username}
        onChange={(value) => onChange("username", value)}
        icon={
          user.username.length > 4 && (
            <img src='/Icons/Success.png' alt='Success' className=' h-4 w-4' />
          )
        }
      />
      <CustomInput
        placeholder='E-MAIL'
        value={user.email}
        disabled
        onChange={(value) => {}}
      />
      <CustomInput
        placeholder='NAME'
        value={user.name}
        onChange={(value) => onChange("name", value)}
      />
      <CustomInput
        placeholder='SURNAME'
        value={user.surname}
        onChange={(value) => onChange("surname", value)}
      />
      <CustomInput
        placeholder='PASSWORD'
        value={user.password}
        type={showPassword ? "text" : "password"}
        onChange={(value) => onChange("password", value)}
        icon={
          showPassword ? (
            <img
              src='/Icons/Eye.svg'
              onClick={() => setShowPassword(false)}
              alt='Success'
              className=' h-5 w-5 cursor-pointer invert'
            />
          ) : (
            <img
              src='/Icons/EyeClosed.svg'
              onClick={() => setShowPassword(true)}
              alt='Success'
              className=' h-5 w-5 cursor-pointer invert'
            />
          )
        }
      />
      <div>
        <ul>
          <li className='flex justify-start items-center gap-2'>
            <img
              src={
                passwordValidation.hasMinLength
                  ? "/Icons/Success.png"
                  : "/Icons/Error.png"
              }
              alt='Validation'
              className='h-4 w-4 inline-block ml-2'
            />
            <span
              className={
                passwordValidation.hasMinLength
                  ? "text-successGreen"
                  : "text-errorRed"
              }
            >
              At least 8 characters
            </span>
          </li>
          <li className='flex justify-start items-center gap-2'>
            <img
              src={
                passwordValidation.hasNumber
                  ? "/Icons/Success.png"
                  : "/Icons/Error.png"
              }
              alt='Validation'
              className='h-4 w-4 inline-block ml-2'
            />
            <span
              className={
                passwordValidation.hasNumber
                  ? "text-successGreen"
                  : "text-errorRed"
              }
            >
              Contains a number
            </span>
          </li>
          <li className='flex justify-start items-center gap-2'>
            <img
              src={
                passwordValidation.hasSpecialChar
                  ? "/Icons/Success.png"
                  : "/Icons/Error.png"
              }
              alt='Validation'
              className='h-4 w-4 inline-block ml-2'
            />
            <span
              className={
                passwordValidation.hasSpecialChar
                  ? "text-successGreen"
                  : "text-errorRed"
              }
            >
              Contains a special character
            </span>
          </li>
        </ul>
      </div>
      <div className='flex w-full justify-center items-center gap-3'>
        <Checkbox
          checked={agreeTOC}
          onCheckedChange={(value) => setAgreeTOC(value)}
          className='border border-irisPurpleLight '
        />
        <span className='text-white running-text-small  text-left'>
          By selecting I agree to the dndai{" "}
          <span className='text-irisPurpleLight'>terms and conditions. </span>
          You can read how we use and protect your data in our{" "}
          <span className='text-irisPurpleLight'>privacy policy.</span>
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
            "LOADING..."
          ) : (
            <>
              CREATE ACCOUNT{" "}
              <img src='/Icons/ArrowRight.svg' alt='' className='h-5 w-5' />
            </>
          )}
        </CustomButton>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Edit from "@/components/ui/Icons/Edit";
import CustomInput from "@/components/ui/custom-input";
import Cancel from "@/components/ui/Icons/Cancel";
import Save from "@/components/ui/Icons/Save";
import CustomButton from "@/components/ui/custom-button";
import useUserStore from "@/utils/userStore";
import { updatePassword, updateUser } from "@/actions/user";
import useCustomToast from "@/hooks/useCustomToast";
import { isPasswordValid } from "@/lib/Helpers/auth";
import CustomValidationtext from "@/components/ui/custom-validationtext";
import { useDebounce } from "@/hooks/useDebounce";
import { verifyUserNameExists } from "@/actions/auth";
export default function Index({ dictionary }) {
  const { user, setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const [fd, setFd] = useState({
    name: user?.name,
    username: user?.username,
    email: user?.email,
  });
  const [usernameExists, setUsernameExists] = useState(false);
  const debounceUsername = useDebounce(fd.username, 150);
  const { invokeToast } = useCustomToast();

  const [isEditing, setIsEditing] = useState({
    personalData: false,
    email: false,
    password: false,
  });

  useEffect(() => {
    const checkUsername = async () => {
      try {
        const exists = await verifyUserNameExists(debounceUsername);
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
  const handleEditClick = (section) => {
    setIsEditing((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
    setFd((prev) => ({
      ...prev,
      name: user.name,
      username: user.username,
      email: user.email,
    }));
  };

  useEffect(() => {
    setFd((prev) => ({
      ...prev,
      name: user.name,
      username: user.username,
      email: user.email,
    }));
  }, [user]);

  const renderPersonalData = () => {
    const handleUpdateUser = async () => {
      try {
        setIsLoading(true);
        const payload = {
          username: fd.username,
          name: fd.name,
        };
        const response = await updateUser(user?.token, payload);
        //  console.log("updated", response);
        setUser({
          ...user,
          ...response,
        });

        invokeToast("User Updated Successfully", "success");
      } catch (error) {
        console.log(error);
        invokeToast("An error occurred", "error");
      } finally {
        handleEditClick("personalData");
        setIsLoading(false);
      }
    };
    return isEditing.personalData ? (
      <div>
        <div className='p-4 flex flex-col gap-8'>
          <div>
            <CustomInput
              placeholder={dictionary.username}
              value={fd.username}
              onChange={(e) =>
                setFd((prev) => ({
                  ...prev,
                  username: e,
                }))
              }
              error={usernameExists}
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
            value={fd.name}
            onChange={(e) =>
              setFd((prev) => ({
                ...prev,
                name: e,
              }))
            }
            placeholder={dictionary.name}
          />
        </div>
        <hr className='border border-white/[8%]' />
        <div className='flex gap-4 justify-end items-end p-4'>
          <CustomButton
            withIcon
            disabled={isLoading}
            onClick={() => handleEditClick("personalData")}
          >
            <Cancel className=' h-3 w-3 fill-white' />
            <span className='running-text-mono text-white'>
              {dictionary.cancel}
            </span>
          </CustomButton>
          <CustomButton
            onClick={handleUpdateUser}
            disabled={isLoading || usernameExists}
            withIcon
            variant={"primary"}
          >
            <Save className=' h-5 w-5 fill-black' />
            <span className='running-text-mono text-black'>
              {dictionary.save}
            </span>
          </CustomButton>
        </div>
      </div>
    ) : (
      <div>
        <div className='p-4 flex flex-col gap-4'>
          <span className='font-roboto-mono text-[10px] leading-[15px]  text-irisPurpleLight'>
            {dictionary.username}
          </span>
          <span className='running-text-mono'>{user.username}</span>
        </div>
        <div className='p-4 flex flex-col gap-4'>
          <span className='font-roboto-mono text-[10px] uppercase leading-[15px]  text-irisPurpleLight'>
            {dictionary.name}
          </span>
          <span className='running-text-mono'>{user.name}</span>
        </div>
      </div>
    );
  };

  const renderEmailSection = () => {
    const { user } = useUserStore();
    return isEditing.email ? (
      <div>
        <div className='p-4 flex flex-col gap-8'>
          <CustomInput placeholder='E-MAIL' defaultValue={user.email} />
        </div>
        <hr className='border border-white/[8%]' />
        <div className='flex gap-4 justify-end items-end p-4'>
          <CustomButton withIcon onClick={() => handleEditClick("email")}>
            <Cancel className=' h-3 w-3 fill-white' />
            <span className='running-text-mono uppercase text-white'>
              {dictionary.cancel}
            </span>
          </CustomButton>
          <CustomButton withIcon variant={"primary"}>
            <Save className=' h-5 w-5 fill-black' />
            <span className='running-text-mono uppercase text-black'>
              {dictionary.save}
            </span>
          </CustomButton>
        </div>
      </div>
    ) : (
      <div>
        <div className='p-4 flex flex-col gap-4 uppercase'>
          <span className='font-roboto-mono text-[10px] leading-[15px]  text-irisPurpleLight'>
            {dictionary.email}
          </span>
          <span className='running-text-mono'>{user.email}</span>
        </div>
      </div>
    );
  };

  const renderPasswordSection = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
      useState(false);

    // Get the validation result for the current password
    const passwordValidation = isPasswordValid(password);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
      setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };
    const reset = () => {
      handleEditClick("password");
      setPassword("");

      setIsPasswordVisible(false);
      setIsConfirmPasswordVisible(false);
      setConfirmPassword("");
    };

    const handleUpdatePassword = async () => {
      try {
        setIsLoading(true);
        const payload = {
          password,
        };
        const response = await updatePassword(user?.token, payload);
        //  console.log("updated", response);

        invokeToast("Password Updated Successfully", "success");
      } catch (error) {
        console.log(error);
        invokeToast("An error occurred", "error");
      } finally {
        reset();
        setIsLoading(false);
      }
    };
    return isEditing.password ? (
      <div>
        <div className='p-4 flex flex-col gap-8'>
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
                    isPasswordVisible
                      ? "/Icons/Eye.svg"
                      : "/Icons/EyeClosed.svg"
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
              placeholder='CONFIRM PASSWORD'
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
                  title='show password icon'
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
        </div>
        <hr className='border border-white/[8%]' />
        <div className='flex gap-4 justify-end items-end p-4'>
          <CustomButton disabled={isLoading} withIcon onClick={reset}>
            <Cancel className=' h-3 w-3 fill-white' />
            <span className='running-text-mono text-white'>
              {dictionary.cancel}
            </span>
          </CustomButton>
          <CustomButton
            onClick={handleUpdatePassword}
            withIcon
            disabled={isLoading}
            variant={"primary"}
          >
            <Save className=' h-5 w-5 fill-black' />
            <span className='running-text-mono text-black'>
              {dictionary.save}
            </span>
          </CustomButton>
        </div>
      </div>
    ) : (
      <div>
        <div className='p-4 flex flex-col gap-4 uppercase'>
          <span className=' uppercase font-roboto-mono text-[10px] leading-[15px]  text-irisPurpleLight'>
            {dictionary.password}
          </span>
          <span className='running-text-mono'>*********</span>
        </div>
      </div>
    );
  };
  return (
    <div className='w-full md:w-4/5  md:px-28 flex flex-col gap-4'>
      <div className='w-full border border-white/[8%] rounded-[16px] bg-white/[8%] uppercase'>
        <div className='p-4 flex justify-between items-center'>
          <span className='headline-4'>{dictionary.personalData}</span>
          <CustomButton
            withIcon={true}
            variant={"subtle"}
            disabled={isLoading}
            onClick={() => handleEditClick("personalData")}
          >
            <Edit className='h-5 w-5 opacity-70 fill-white' />
            {dictionary.edit}
          </CustomButton>
        </div>
        <hr className='border border-white/[8%]' />
        {renderPersonalData()}
      </div>
      <div className='w-full border border-white/[8%] rounded-[16px] bg-white/[8%] uppercase'>
        <div className='p-4 flex justify-between items-center'>
          <span className='headline-4 uppercase'>{dictionary.email}</span>
          {/* <span
            className='running-text-mono flex justify-center items-center gap-2 cursor-pointer'
            onClick={() => handleEditClick("email")}
          >
            <Edit className='h-5 w-5 opacity-70 fill-white' />
            EDIT
          </span> */}
        </div>
        <hr className='border border-white/[8%]' />
        {renderEmailSection()}
      </div>
      <div className='w-full border border-white/[8%] rounded-[16px] bg-white/[8%]'>
        <div className='p-4 flex justify-between items-center'>
          <div className='flex flex-col gap-2'>
            <span className='headline-4'>{dictionary.password}</span>
            <span className='running-text-small text-gray2'>
              {dictionary.changePassword}
            </span>
          </div>
          <CustomButton
            withIcon={true}
            variant={"subtle"}
            disabled={isLoading}
            onClick={() => handleEditClick("password")}
          >
            <Edit className='h-5 w-5 opacity-70 fill-white' />
            {dictionary.edit}
          </CustomButton>
        </div>
        <hr className='border border-white/[8%]' />
        {renderPasswordSection()}
      </div>
    </div>
  );
}

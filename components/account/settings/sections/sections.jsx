"use client";
import { useState } from "react";
import Edit from "@/components/ui/Icons/Edit";
import CustomInput from "@/components/ui/custom-input";
import Cancel from "@/components/ui/Icons/Cancel";
import Save from "@/components/ui/Icons/Save";
import CustomButton from "@/components/ui/custom-button";
import useUserStore from "@/utils/userStore";

export default function Index() {
  const { user } = useUserStore();
  const [isEditing, setIsEditing] = useState({
    personalData: false,
    email: false,
    password: false,
  });

  const handleEditClick = (section) => {
    setIsEditing((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  console.log(user);
  const renderPersonalData = () => {
    return isEditing.personalData ? (
      <div>
        <div className='p-4 flex flex-col gap-8'>
          <CustomInput placeholder='Username' />
          <CustomInput placeholder='Name' />
          <CustomInput placeholder='SurName' />
        </div>
        <hr className='border border-white/[8%]' />
        <div className='flex gap-4 justify-end items-end p-4'>
          <CustomButton
            withIcon
            onClick={() => handleEditClick("personalData")}
          >
            <Cancel className=' h-3 w-3 fill-white' />
            <span className='running-text-mono text-white'>CANCEL</span>
          </CustomButton>
          <CustomButton withIcon variant={"primary"}>
            <Save className=' h-5 w-5 fill-black' />
            <span className='running-text-mono text-black'>SAVE</span>
          </CustomButton>
        </div>
      </div>
    ) : (
      <div>
        <div className='p-4 flex flex-col gap-4'>
          <span className='font-roboto-mono text-[10px] leading-[15px]  text-irisPurpleLight'>
            USERNAME
          </span>
          <span className='running-text-mono'>{user.username}</span>
        </div>
        <div className='p-4 flex flex-col gap-4'>
          <span className='font-roboto-mono text-[10px] leading-[15px]  text-irisPurpleLight'>
            NAME
          </span>
          <span className='running-text-mono'>LUCAS</span>
        </div>
        <div className='p-4 flex flex-col gap-4'>
          <span className='font-roboto-mono text-[10px] leading-[15px]  text-irisPurpleLight'>
            SURNAME
          </span>
          <span className='running-text-mono'>ROSSMAN</span>
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
            <span className='running-text-mono text-white'>CANCEL</span>
          </CustomButton>
          <CustomButton withIcon variant={"primary"}>
            <Save className=' h-5 w-5 fill-black' />
            <span className='running-text-mono text-black'>SAVE</span>
          </CustomButton>
        </div>
      </div>
    ) : (
      <div>
        <div className='p-4 flex flex-col gap-4 uppercase'>
          <span className='font-roboto-mono text-[10px] leading-[15px]  text-irisPurpleLight'>
            E-MAIL
          </span>
          <span className='running-text-mono'>{user.email}</span>
        </div>
      </div>
    );
  };

  const renderPasswordSection = () => {
    return isEditing.password ? (
      <div>
        <div className='p-4 flex flex-col gap-8'>
          <CustomInput
            placeholder='NEW PASSWORD'
            type='password'
            defaultValue='*********'
          />
          <CustomInput
            placeholder='CONFIRM PASSWORD'
            type='password'
            defaultValue='*********'
          />
        </div>
        <hr className='border border-white/[8%]' />
        <div className='flex gap-4 justify-end items-end p-4'>
          <CustomButton withIcon onClick={() => handleEditClick("password")}>
            <Cancel className=' h-3 w-3 fill-white' />
            <span className='running-text-mono text-white'>CANCEL</span>
          </CustomButton>
          <CustomButton withIcon variant={"primary"}>
            <Save className=' h-5 w-5 fill-black' />
            <span className='running-text-mono text-black'>SAVE</span>
          </CustomButton>
        </div>
      </div>
    ) : (
      <div>
        <div className='p-4 flex flex-col gap-4 uppercase'>
          <span className='font-roboto-mono text-[10px] leading-[15px]  text-irisPurpleLight'>
            PASSWORD
          </span>
          <span className='running-text-mono'>*********</span>
        </div>
      </div>
    );
  };
  return (
    <div className='w-4/5  px-28 flex flex-col gap-4'>
      <div className='w-[709px] border border-white/[8%] rounded-[16px] bg-white/[8%] uppercase'>
        <div className='p-4 flex justify-between items-center'>
          <span className='headline-4'>Personal Data</span>
          <span
            className='running-text-mono flex justify-center items-center gap-2 cursor-pointer'
            onClick={() => handleEditClick("personalData")}
          >
            <Edit className='h-5 w-5 opacity-70 fill-white' />
            EDIT
          </span>
        </div>
        <hr className='border border-white/[8%]' />
        {renderPersonalData()}
      </div>
      <div className='w-[709px] border border-white/[8%] rounded-[16px] bg-white/[8%] uppercase'>
        <div className='p-4 flex justify-between items-center'>
          <span className='headline-4'>E-MAIL</span>
          <span
            className='running-text-mono flex justify-center items-center gap-2 cursor-pointer'
            onClick={() => handleEditClick("email")}
          >
            <Edit className='h-5 w-5 opacity-70 fill-white' />
            EDIT
          </span>
        </div>
        <hr className='border border-white/[8%]' />
        {renderEmailSection()}
      </div>
      <div className='w-[709px] border border-white/[8%] rounded-[16px] bg-white/[8%]'>
        <div className='p-4 flex justify-between items-center'>
          <div className='flex flex-col gap-2'>
            <span className='headline-4'>Password</span>
            <span className='running-text-small text-gray2'>
              Change your password regularly to prevent unauthorized access.
            </span>
          </div>
          <span
            className='running-text-mono flex justify-center items-center gap-2 cursor-pointer'
            onClick={() => handleEditClick("password")}
          >
            <Edit className='h-5 w-5 opacity-70 fill-white' />
            EDIT
          </span>
        </div>
        <hr className='border border-white/[8%]' />
        {renderPasswordSection()}
      </div>
    </div>
  );
}

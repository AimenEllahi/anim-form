import React, { useState } from "react";
import CustomInput from "@/components/ui/custom-input";
import CustomTextArea from "@/components/ui/custom-textArea";
import CustomButton from "@/components/ui/custom-button";
import { Checkbox } from "@/components/ui/checkbox";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import { useRouter } from "next/navigation";
import { sendContact } from "@/actions/email";
import useCustomToast from "@/hooks/useCustomToast";

export default function support() {
  const router = useRouter();
  const { invokeToast } = useCustomToast();
  const [flag, setFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fd, setFd] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleNavigation = (path) => {
    router.push(path);
  };

  const isValid = () => {
    if (!fd.name) {
      return false;
    }
    if (!fd.surname) {
      return false;
    }
    if (!fd.email) {
      return false;
    }
    if (!fd.message) {
      return false;
    }
    if (!flag) {
      return false;
    }
    return true;
  };

  const handleSend = async () => {
    try {
      setIsLoading(true);
      await sendContact({
        ...fd,
        type: "support",
      });
      invokeToast("Email sent successfully", "success");
    } catch (error) {
      console.log(error);
      invokeToast(
        error?.response?.data?.message || "Failed to send email",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className=' flex w-full flex-col gap-6 justify-center items-center'>
      <div className='w-full flex gap-4'>
        <CustomInput
          value={fd.name}
          onChange={(e) => setFd({ ...fd, name: e })}
          placeholder='Name'
        />
        <CustomInput
          value={fd.surname}
          onChange={(e) => setFd({ ...fd, surname: e })}
          placeholder='surname'
        />
      </div>
      <div className='w-full flex flex-col gap-4'>
        <CustomInput
          value={fd.email}
          onChange={(e) => setFd({ ...fd, email: e })}
          placeholder='e-mail'
        />
        <CustomTextArea
          value={fd.message}
          onChange={(e) => setFd({ ...fd, message: e })}
          placeholder='Message'
        />
        <div className='flex justify-center items-center gap-4'>
          <Checkbox
            onCheckedChange={setFlag}
            checked={flag}
            onClick={() => setFlag(!flag)}
            className='border border-irisPurpleLight h-[20px] w-[20px]'
          />
          <span className='running-text-small'>
            By selecting I agree to the dndai{" "}
            <span
              onClick={() => handleNavigation("/terms")}
              className='text-irisPurpleLight cursor-pointer'
            >
              terms and conditions
            </span>
            . You can read how we use and protect your data in our{" "}
            <span
              onClick={() => handleNavigation("/privacy")}
              className='text-irisPurpleLight cursor-pointer'
            >
              privacy policy
            </span>
            .
          </span>
        </div>
        <CustomButton
          className={"w-fit ms-auto"}
          disabled={!isValid() || isLoading}
          variant={"primary"}
          withIcon={true}
          onClick={handleSend}
        >
          <span>Send</span>
          <ArrowRight className='h-5 w-5 fill-russianViolet opacity-70' />
        </CustomButton>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import CustomInput from "@/components/ui/custom-input";
import CustomTextArea from "@/components/ui/custom-textArea";
import CustomButton from "@/components/ui/custom-button";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import Emoticons from "./emoticons";
import useCustomToast from "@/hooks/useCustomToast";
import { sendContact } from "@/actions/email";
const emoticons = [
  { id: 1, label: "Very Unhappy", icon: "/Icons/saddest.svg" },
  { id: 2, label: "Unhappy", icon: "/Icons/sadder.svg" },
  { id: 3, label: "Neutral", icon: "/Icons/sad.svg" },
  { id: 4, label: "Happy", icon: "/Icons/happy.svg" },
  { id: 5, label: "Very Happy", icon: "/Icons/happiest.svg" },
];
export default function feedback() {
  const [selected, setSelected] = useState(5);
  const [thoughts, setThoughts] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { invokeToast } = useCustomToast();

  const handleSend = async () => {
    try {
      setIsLoading(true);
      await sendContact({
        emoticon: emoticons[selected - 1].label,
        thoughts,
        type: "feedback",
      });
      invokeToast("Email sent successfully", "success");
    } catch {
      invokeToast("Failed to send email", "error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className=' flex w-full flex-col gap-6 justify-center items-center'>
      <div className='w-full flex flex-col gap-4'>
        <span>How would you rate dndai?</span>
        <Emoticons
          emoticons={emoticons}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className='w-full flex flex-col gap-4'>
        <span>Do you have any thoughts you’d like to share?</span>
        <CustomTextArea
          value={thoughts}
          onChange={(e) => setThoughts(e)}
          placeholder='Your thoughts'
        />

        <CustomButton
          variant={"primary"}
          onClick={handleSend}
          disabled={isLoading}
          withIcon={true}
          className={" focus:bg-white focus:text-black self-end"}
        >
          <span>Send</span>
          <ArrowRight className='h-5 w-5 fill-russianViolet opacity-70' />
        </CustomButton>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import CustomInput from "@/components/ui/custom-input";
import CustomTextArea from "@/components/ui/custom-textArea";
import CustomButton from "@/components/ui/custom-button";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import useCustomToast from "@/hooks/useCustomToast";
import PoorFilled from "@/components/ui/Icons/Poor";
import GreatFilled from "@/components/ui/Icons/Great";
import SuperFilled from "@/components/ui/Icons/Super";
import NeutralFilled from "@/components/ui/Icons/Neutral";
import BadFilled from "@/components/ui/Icons/Bad";
import { sendContact } from "@/actions/email";

const emoticons = [
  {
    id: 1,
    label: "Very Unhappy",
    filledIcon: <PoorFilled />,
    icon: "/Icons/saddest.svg",
  },
  {
    id: 2,
    label: "Unhappy",
    filledIcon: <BadFilled />,
    icon: "/Icons/sadder.svg",
  },
  {
    id: 3,
    label: "Neutral",
    filledIcon: <NeutralFilled />,
    icon: "/Icons/sad.svg",
  },
  {
    id: 4,
    label: "Happy",
    filledIcon: <SuperFilled />,
    icon: "/Icons/happy.svg",
  },
  {
    id: 5,
    label: "Very Happy",
    filledIcon: <GreatFilled />,
    icon: "/Icons/Great.svg",
  },
];

export default function Feedback() {
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
    } catch (error) {
      console.log(err);
      invokeToast(
        error?.response?.data?.message || "Failed to send email",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <div className='flex w-full flex-col gap-6 justify-center items-center'>
      <div className='w-full flex flex-col gap-4'>
        <span>How would you rate DNDai?</span>
        <div className='flex flex-col items-start'>
          <div className='flex justify-start space-x-4'>
            {emoticons.map((emoticon) => (
              <div
                key={emoticon.id}
                className={`cursor-pointer text-4xl border h-10 w-10 rounded-full flex justify-center items-center bg-white/[8%] ${
                  selected === emoticon.id
                    ? "text-white"
                    : "text-white opacity-50"
                }`}
                title={emoticon.label}
                onClick={() => handleSelect(emoticon.id)}
              >
                {selected === emoticon.id ? (
                  <div className='h-5 w-5'>{emoticon.filledIcon}</div>
                ) : (
                  <img
                    src={emoticon.icon}
                    alt={emoticon.label}
                    title={emoticon.label}
                    className='h-5 w-5'
                  />
                )}
              </div>
            ))}
          </div>
        </div>
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
          className={"focus:bg-white focus:text-black self-end"}
        >
          <span>Send</span>
          <ArrowRight className='h-5 w-5 fill-russianViolet opacity-70' />
        </CustomButton>
      </div>
    </div>
  );
}

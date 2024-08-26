import React, { useState } from "react";
import CustomInput from "@/components/ui/custom-input";
import CustomTextArea from "@/components/ui/custom-textArea";
import CustomButton from "@/components/ui/custom-button";

import ArrowRight from "@/components/ui/Icons/ArrowRight";
import Upload from "./upload";
import Cancel from "@/components/ui/Icons/Cancel";
import Delete from "@/components/ui/Icons/Delete";
import useCustomToast from "@/hooks/useCustomToast";

import { sendContact } from "@/actions/email";
//bug component
export default function bug() {
  const [files, setFiles] = useState([]);
  const [bugDescription, setBugDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { invokeToast } = useCustomToast();
  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSendBugReport = async () => {
    try {
      setIsLoading(true);
      await sendContact({
        files,
        bugDescription,
        type: "bug",
      });
      invokeToast("Email sent successfully", "success");
      setBugDescription("");
      setFiles([]);
    } catch {
      invokeToast("Failed to send email", "error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className=" flex w-full flex-col gap-6 justify-center items-center">
      <div className="w-full flex flex-col gap-4">
        <span>Tell us more information about the bug</span>
        <CustomTextArea
          value={bugDescription}
          onChange={(e) => setBugDescription(e)}
          placeholder="Describe the bug"
        />
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col gap-2">
          <Upload files={files} setFiles={setFiles} />
          <span className="text-gray2">Max 5</span>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          {files.map((image, index) => (
            <div
              onClick={() => handleDelete(index)}
              key={index}
              className="w-fit h-fit relative group"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30" />
              <Delete className="h-5 absolute right-3 top-3 opacity-0 w-5 fill-errorRed cursor-pointer ease-animate group-hover:opacity-70" />
              <img
                key={index}
                src={image.url}
                alt={image.filename}
                className="h-[150px] w-[150px] object-fill rounded-[10px]"
              />
            </div>
          ))}
        </div>
        <CustomButton
          onClick={handleSendBugReport}
          disabled={isLoading || (!bugDescription && files.length <= 0)}
          variant={"primary"}
          withIcon={true}
          className={" focus:bg-white focus:text-black self-end"}
        >
          <span>Send</span>
          <ArrowRight className="h-5 w-5 fill-gray2" />
        </CustomButton>
      </div>
    </div>
  );
}

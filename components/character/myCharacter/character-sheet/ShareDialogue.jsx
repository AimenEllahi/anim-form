import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CustomButton from "@/components/ui/custom-button";
import Cancel from "@/components/ui/Icons/Cancel";
import CustomInputIcon from "@/components/ui/custom-input-icon";
import Send from "@/components/ui/Icons/Send";
import { usePathname } from "next/navigation";
import useCustomToast from "@/hooks/useCustomToast";
import useUserStore from "@/utils/userStore";
import { FacebookShareButton } from "react-share";
import useDeviceDetect from "@/hooks/useDeviceDetect";
const socialPlatforms = [
  { name: "X", icon: "/Icons/twitter.jpeg" },
  { name: "INSTAGRAM", icon: "/Icons/insta.png" },
];

export default function ShareDialogue({ open, onOpenChange }) {
  const pathname = usePathname();
  const { user } = useUserStore();
  const { invokeToast } = useCustomToast();
  const { isMobile } = useDeviceDetect();
  const handleCancelClick = () => {
    onOpenChange(false); // Close the dialog by setting open to false
  };
  let url = process.env.NEXT_PUBLIC_BASE_URL + pathname;

  const shareOnTwitter = () => {
    const tweetText = "Check out this character on DnD AI";
    const fullUrl = `${url}?utm_source=twitter&utm_user=${user._id}`; // Append UTM parameters
    const encodedUrl = encodeURIComponent(fullUrl); // Encode the full URL
    const encodedText = encodeURIComponent(tweetText); // Encode the tweet text

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
    window.open(twitterUrl, "_blank");
  };

  const shareOnInstagram = () => {
    const shareableUrl = `${url}?utm_source=instagram&utm_medium=web&utm_user=${user._id}`;
    const encodedUrl = encodeURIComponent(shareableUrl); // Encode the URL for safety
    const instagramUrl = `https://www.instagram.com/create/story/?utm_source=instagram&utm_medium=web&utm_user=${user._id}&url=${encodedUrl}`;

    // Copy the URL to clipboard
    navigator.clipboard.writeText(shareableUrl);

    // Notify the user
    invokeToast("Link copied. Redirecting to Instagram!", "success");

    // Open Instagram (it will create a post with the URL in the caption)

    setTimeout(() => {
      window.open(instagramUrl, "_blank");
    }, 4000);

    // Open Instagram (it won't create a post but will redirect to Instagram)
    //window.open(instagramUrl, "_blank");
  };

  const shareOnFacebook = () => {
    const shareableUrl = `${url}?utm_source=tiktok&utm_user=${user._id}`;
    const shareUrl = encodeURIComponent(shareableUrl); // Replace with your website URL
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    window.open(facebookShareUrl, "_blank");
  };

  const handleCopyClick = () => {
    url += "?utm_source=share&utm_user=" + user._id;

    navigator.clipboard.writeText(url);
    invokeToast("Link copied to clipboard", "success");
  };

  const handleShareOnSocialMedia = (platform) => {
    if (platform === "FACEBOOK") shareOnFacebook();
    else if (platform === "INSTAGRAM") shareOnInstagram();
    else if (platform === "X") shareOnTwitter();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='bg-white/[8%] border border-white/[7%] !rounded-2xl !p-0 flex-col !gap-0  w-[92%] md:!w-[481px] max-w-screen flex '>
        <div className='text-left text-white !z-50 flex flex-col'>
          <div className='p-4 headline-3 md:running-text-large'>
            Share Adventurer
          </div>
          <div className='p-4 flex flex-col gap-6 border-y border-white/10'>
            <div className='w-full flex gap-6'>
              <FacebookShareButton
                url={url + "?utm_source=facebook&utm_user=" + user._id}
                quote={"Check out this character on DnD AI"}
              >
                <div
                  key={"FACEBOOK"}
                  className='flex flex-col justify-center items-center gap-3'
                >
                  <div className='w-14 h-14 rounded-full'>
                    <img
                      //onClick={() => handleShareOnSocialMedia('FACEBOOK')}
                      src={"/Icons/fb.png"}
                      alt={`Facebook Icon`}
                      className='object-contain cursor-pointer  rounded-full size-14'
                    />
                  </div>
                  <span className='uppercase description'>Facebook</span>
                </div>
              </FacebookShareButton>
              {socialPlatforms.map((platform) => (
                <div
                  key={platform.name}
                  className='flex flex-col justify-center items-center gap-3'
                >
                  <div className='w-14 h-14 rounded-full'>
                    <img
                      onClick={() => handleShareOnSocialMedia(platform.name)}
                      src={platform.icon}
                      alt={`${platform.name} Icon`}
                      className='object-contain cursor-pointer  rounded-full size-14'
                    />
                  </div>
                  <span className='uppercase description'>{platform.name}</span>
                </div>
              ))}
            </div>
            <CustomInputIcon
              value={
                process.env.NEXT_PUBLIC_BASE_URL +
                pathname.substring(0, isMobile ? 5 : 15) +
                "..."
              }
              //   onClick={addComment}
              onChange={(e) => {}}
              className={"w-full  truncate h-full"}
              placeholder={""}
              icon={<Send fill={"white"} className='h-4 w-4  opacity-70' />}
              isComment={true}
              text={"Copy"}
              onClick={handleCopyClick}
              isSubtle={true}
            />
          </div>
          <div className='p-6 w-full flex justify-end'>
            <CustomButton
              withIcon={true}
              variant='secondary'
              onClick={handleCancelClick} // Close the dialog when clicked
              className={"w-full md:w-fit"}
            >
              <Cancel className='h-3 w-3 opacity-70 fill-white' />
              Cancel
            </CustomButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

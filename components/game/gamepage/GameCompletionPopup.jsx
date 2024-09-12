import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "@/components/ui/custom-button";
import DOMPurify from "dompurify";
import Link from "next/link"; // Import Link for navigation

export default function GameCompletionPopup({ message, onClose, action }) {
  const [open, setOpen] = useState(true);

  // Function to format the message
  const formatMessage = (message) => {
    let formattedMessage = message.replace(/###/g, "<strong>").replace(/###/g, "</strong>");
    formattedMessage = formattedMessage.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    formattedMessage = formattedMessage.replace(/\n/g, "<br />");
    formattedMessage = formattedMessage.replace(/^- (.*?)(?=\n|$)/gm, "<li>$1</li>");
    formattedMessage = formattedMessage.replace(/(<li>.*<\/li>)/g, "<ul>$1</ul>");
    return DOMPurify.sanitize(formattedMessage);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='bg-white/[8%] !rounded-[16px] !px-0 gap-0 text-white border border-white/10 !w-[94%] sm:min-w-[472px] running-text text-gray1'>
        <div className='flex flex-col gap-[24px] p-6 pt-4'>
          <h2 className='running-text-large text-gray1'>
            <span style={{ color: '#05D381' }}>Campaign Completed!</span> 
            <p>Ready for your next Adventure?</p>
          </h2>

          {/* Add a scrollable container for long messages */}
          <div 
            style={{ 
              maxHeight: '50vh',  // Use relative height for mobile responsiveness
              overflowY: 'auto',  // Enable vertical scrolling
              paddingRight: '8px', // Optional, add some padding for the scrollbar
            }}
          >
            <p dangerouslySetInnerHTML={{ __html: formatMessage(message) }}></p>
          </div>
        </div>
        
        <DialogFooter className='!flex gap-4 border-t border-white/10 p-6'>
          <Button
            onClick={() => {
              setOpen(false);
              onClose(); // Call onClose to handle any additional actions
            }}
            withIcon={true}
          >
            Continue anyway
          </Button>

          {/* Use Link component to wrap the "Finish" button */}
          <Link href="/discover" passHref>
            <Button
              onClick={() => setOpen(false)}
              variant={"success"}
              withIcon={false}
            >
              Finish
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

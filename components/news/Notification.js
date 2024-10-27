import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Notifications from "@/components/ui/Icons/Notification";
import CustomMenuItem from "../ui/custom-menu-item";

const Notification = () => {
  const [open, setOpen] = useState(false);
  const defaultNotifications = [
    {
      id: 1,
      message: "Adventurer Overview Update 1.2",
      link: "https://dndai.app/article/3",
      read: false,
    },
    { id: 2, message: "Notification system added  ♥", read: true },
    {
      id: 3,
      message: "Official Release of Patch 1.1",
      link: "https://dndai.app/article/2",
      read: true,
    },
    {
      id: 4,
      message: "Official Release of Patch 1.0",
      link: "https://dndai.app/article/1",
      read: true,
    },
  ];

  const [notifications, setNotifications] = useState(defaultNotifications);

  // Retrieve the stored read statuses from localStorage when the component mounts
  useEffect(() => {
    const storedNotifications = JSON.parse(
      localStorage.getItem("notifications")
    );
    if (storedNotifications) {
      setNotifications(storedNotifications);
    }
  }, []);

  // Function to handle marking a notification as read
  const handleRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    );

    // Update state and localStorage
    setNotifications(updatedNotifications);
    localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
  };

  // Count unread notifications
  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  return (
    <DropdownMenu suppressHydrationWarning open={open} onOpenChange={setOpen}>
      {/* Accessible Trigger with keyboard and aria support */}
      <DropdownMenuTrigger
        asChild
        className='outline-0 hidden md:block'
        aria-haspopup='menu'
        aria-expanded={open}
        tabIndex={0}
      >
        <div
          className='relative cursor-pointer'
          role='button' // Make it identifiable as a button
          aria-label='Notifications' // Add descriptive label
        >
          <div
            className={cn(
              "bg-white/10 w-9 h-9  border bg-blur !flex !items-center !justify-center box-border ease-animate rounded-full border-white/[8%] cursor-pointer hover:border-white/20 hover:bg-white/10 active:bg-white/20 active:border-white/40 disabled:opacity-30% disabled:pointer-events-none hover:!duration-200 active:!duration-100",
              open && "border-white/40 bg-white/20 cursor-pointer"
            )}
          >
            <Notifications />
            {unreadCount > 0 && (
              <span
                className='absolute bg-red-500 text-white rounded-full text-xs px-1'
                style={{ top: "-5px", right: "-5px" }}
              >
                {unreadCount}
              </span>
            )}
          </div>
        </div>
      </DropdownMenuTrigger>

      {/* Dropdown content with ARIA roles */}
      <DropdownMenuContent className='bg-transparent flex flex-col mt-4 p-2 !px-[9px] border border-white/10 z-[21] bg-blur menu-shadow text-white running-text-mono rounded-[16px] !gap-y-2'>
        {notifications.length === 0 ? (
          <div className='running-text-mono text-gray2 '>No notifications</div>
        ) : (
          notifications.map((notification) => (
            <CustomMenuItem
              key={notification.id}
              // className={cn(
              //   "flex gap-2 p-2 cursor-pointer rounded-[10px] transition-all duration-300 ease-linear pt-4  pl-4"
              // )}
              onMouseEnter={() => handleRead(notification.id)} // Trigger read on hover
            >
              <span>
                {notification.message}
                <br></br>
                {notification.link && (
                  <a
                    href={notification.link}
                    target='_blank'
                    className='text-blue-500 underline'
                  >
                    {notification.link}
                  </a>
                )}
              </span>
            </CustomMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notification;

import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Notifications from "@/components/ui/Icons/Notification";
import CustomMenuItem from "../ui/custom-menu-item";

const Notification = () => {
  const [open, setOpen] = useState(false);
  const currentVersion = "1.1"; // Update this when notifications change
  const defaultNotifications = [
    {
      id: 1,
      message: "Achievements & Ranks Update 1.3",
      link: "https://dndai.app/article/4",
      read: false,
    },
    {
      id: 2,
      message: "Adventurer Overview Update 1.2",
      link: "https://dndai.app/article/3",
      read: false,
    },
    { id: 3, message: "Notification system added ♥", read: true },
    {
      id: 4,
      message: "Official Release of Patch 1.1",
      link: "https://dndai.app/article/2",
      read: true,
    },
    {
      id: 5,
      message: "Official Release of Patch 1.0",
      link: "https://dndai.app/article/1",
      read: true,
    },
  ];

  const [notifications, setNotifications] = useState(defaultNotifications);

  // Initialize notifications from localStorage, or reset if version is outdated
  useEffect(() => {
    const storedVersion = localStorage.getItem("notificationVersion");
    const storedNotifications = JSON.parse(
      localStorage.getItem("notifications")
    );

    if (storedVersion !== currentVersion || !storedNotifications) {
      localStorage.setItem("notifications", JSON.stringify(defaultNotifications));
      localStorage.setItem("notificationVersion", currentVersion);
      setNotifications(defaultNotifications);
    } else {
      setNotifications(storedNotifications);
    }
  }, []);

  const handleRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id && !notification.read
        ? { ...notification, read: true }
        : notification
    );

    if (
      notifications.some(
        (notification) => notification.id === id && !notification.read
      )
    ) {
      setNotifications(updatedNotifications);
      localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
    }
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  return (
    <DropdownMenu suppressHydrationWarning open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        asChild
        className="outline-0 hidden md:block"
        aria-haspopup="menu"
        aria-expanded={open}
        tabIndex={0}
      >
        <div
          className="relative cursor-pointer"
          role="button"
          aria-label="Notifications"
        >
          <div
            className={cn(
              "bg-white/10 w-9 h-9 border bg-blur flex items-center justify-center box-border rounded-full border-white/[8%] cursor-pointer hover:border-white/20 hover:bg-white/10 active:bg-white/20 active:border-white/40",
              open && "border-white/40 bg-white/20 cursor-pointer"
            )}
          >
            <Notifications />
            {unreadCount > 0 && (
              <span
                className="absolute bg-red-500 text-white rounded-full text-xs px-1"
                style={{ top: "-5px", right: "-5px" }}
              >
                {unreadCount}
              </span>
            )}
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-transparent flex flex-col mt-4 p-2 !px-[9px] border border-white/10 z-[21] bg-blur menu-shadow text-white running-text-mono rounded-[16px] !gap-y-2">
        {notifications.length === 0 ? (
          <div className="running-text-mono text-gray2">No notifications</div>
        ) : (
          notifications.map((notification) => (
            <CustomMenuItem
              key={notification.id}
              onClick={() => handleRead(notification.id)}
            >
              <span>
                {notification.message}
                <br />
                {notification.link && (
                  <a
                    href={notification.link}
                    target="_blank"
                    className="text-blue-500 underline"
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

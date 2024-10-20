import React, { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import CustomIconButton from '../ui/custom-iconbutton';
import { cn } from '@/lib/utils';

const Notification = () => {
  const defaultNotifications = [
    { id: 1, message: 'Notification system added ♥', read: false },
    { id: 2, message: 'Official Release of Patch 1.1', link: "https://dndai.app/article/2", read: false },
    { id: 3, message: 'Official Release of Patch 1.0', link: "https://dndai.app/article/1", read: false },
  ];

  const [notifications, setNotifications] = useState(defaultNotifications);

  // Retrieve the stored read statuses from localStorage when the component mounts
  useEffect(() => {
    const storedNotifications = JSON.parse(localStorage.getItem('notifications'));
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
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
  };

  // Count unread notifications
  const unreadCount = notifications.filter((notification) => !notification.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='relative'>
          <CustomIconButton
            className={cn(
              'outline-none bg-white/10 h-9 w-9 border border-white/10 hover:border-white/20 active:border-white/40 transition-all duration-300 flex items-center justify-center rounded-full'
            )}
          >
            <img src='/Icons/Watch.svg' title='Notification bell' alt='bell icon' />
            {unreadCount > 0 && (
              <span
                className='absolute bg-red-500 text-white rounded-full text-xs px-1'
                style={{ top: '-5px', right: '-5px' }}
              >
                {unreadCount}
              </span>
            )}
          </CustomIconButton>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='bg-transparent  flex flex-col mt-4 p-2 !px-[9px]  border border-white/10 z-[21] bg-blur menu-shadow text-white running-text-mono rounded-[16px] !gap-y-2'>
        {notifications.length === 0 ? (
          <div className='running-text-mono text-gray2'>No notifications</div>
        ) : (
          notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className={cn(
                'flex gap-2 p-2 cursor-pointer rounded-md transition-all duration-300 ease-linear'

              )}
              onMouseEnter={() => handleRead(notification.id)} // Trigger read on hover
            >
              <span>
                {notification.message}
                <p></p>
                {/* Check if the notification has a link and render an anchor tag if it does */}
                {notification.link && (
                  <a href={notification.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ">
                    {notification.link}
                  </a>
                )}
              </span>
              {!notification.read}
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notification;

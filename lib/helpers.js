import ToastWithAction from "@/components/ui/custom-toast";

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isPasswordValid = (password) => {
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/g.test(password);

  return { hasMinLength, hasNumber, hasSpecialChar };
};
export const triggerToast = (message, title, actionText, actionIcon) => {
  console.log("triggering toast");
  return (
    <ToastWithAction
      message={message}
      title={title}
      actionText={actionText}
      actionIcon={actionIcon}
    />
  );
};

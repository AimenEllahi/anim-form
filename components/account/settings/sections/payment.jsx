import React, { useEffect, useState } from "react";
import CustomButton from "@/components/ui/custom-button";
import Download from "@/components/ui/Icons/Download";
import Edit from "@/components/ui/Icons/Edit";
import Delete from "@/components/ui/Icons/Delete";
import useUserStore from "@/utils/userStore";
import Diamond from "@/components/ui/Icons/Diamond";
import { useRouter } from "next/navigation";
import useCustomToast from "@/hooks/useCustomToast";
import { cancelSubscription, getPaymentHistory } from "@/actions/payment";

const NoSubscription = () => {
  const router = useRouter();
  return (
    <div className='w-full p-6 flex items-center flex-col gap-6 justify-center text-center'>
      <span className=' running-text-large'>
        You have <span className='text-irisPurpleLight'>no active</span> <br />
        subscription yet
      </span>
      <CustomButton onClick={() => router.push("/pricing")} withIcon={true}>
        <Diamond className='h-5 w-5 opacity-70 fill-white' />
        Upgrade
      </CustomButton>
    </div>
  );
};

export default function Payment() {
  const { user, updatePaymentHistory } = useUserStore();
  const [loading, setLoading] = useState(false);
  const { invokeToast } = useCustomToast();

  let subscription = {};
  if (user.paymentHistory?.length > 0)
    subscription = user?.paymentHistory
      .filter((data) => data.mode === "subscription")
      .slice(-1)[0];

  const handleUpdatePaymentHistory = async () => {
    try {
      const { paymentHistory } = await getPaymentHistory(user?.token);

      updatePaymentHistory(paymentHistory);
    } catch (error) {
      console.error("Error Updating Payment History", error);
    }
  };
  useEffect(() => {
    handleUpdatePaymentHistory();
  }, [user?.token]);

  /// console.log(subscription);
  const formatDate = (_date) => {
    const date = new Date(_date);
    // Format the date as DD.MM.YYYY
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };
  const getNextRenewal = () => {
    const startDate = new Date(subscription.date);
    let nextRenewalDate;

    switch (subscription.plan.duration) {
      case "Monthly":
        nextRenewalDate = new Date(startDate);
        nextRenewalDate.setMonth(startDate.getMonth() + 1);
        break;
      case "Yearly":
        nextRenewalDate = new Date(startDate);
        nextRenewalDate.setFullYear(startDate.getFullYear() + 1);
        break;
      case "Semiannually":
        nextRenewalDate = new Date(startDate);
        nextRenewalDate.setMonth(startDate.getMonth() + 6);
        break;
      default:
        throw new Error("Unsupported subscription duration");
    }

    return formatDate(nextRenewalDate);
  };

  const handleCancelSubbscription = async (subsId) => {
    try {
      setLoading(true);
      const { paymentHistory } = await cancelSubscription(subsId, user?.token);
      // console.log(response);

      handleUpdatePaymentHistory();

      invokeToast("Subscription Cancelled Successfully", "Success");
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error Cancelling Subscription",
        "Error"
      );
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='w-full md:w-4/5  md:px-28 flex flex-col gap-4'>
      <div className='w-full border border-white/[8%] rounded-[16px] bg-white/[8%]'>
        <div className='p-4 flex justify-between items-center'>
          <span className='headline-4'>Active payment</span>
          <span
            className='running-text-mono flex justify-center items-center gap-2 cursor-pointer uppercase'
            onClick={() => handleEditClick("email")}
          >
            <Download className='h-5 w-5 opacity-70 fill-white' />
            Download invoice
          </span>
        </div>
        <hr className='border border-white/[8%] ' />
        {!subscription?.reward ? (
          <NoSubscription />
        ) : (
          <div className='p-4 flex justify-start items-center gap-6 '>
            <div className='bg-white/[8%] uppercase border border-white/10 rounded-[16px] w-[267px]'>
              <div className='p-4 flex flex-col gap-4'>
                <span className='running-text-mono  text-gray2'>
                  {subscription?.plan?.title || "NA"}
                </span>
                <span className='text-white headline-4'>
                  {subscription?.plan?.price || "NA"}
                  <span className='running-text-mono text-gray2'> /Month</span>
                </span>
              </div>
              <hr className='border border-white/[8%]' />
              <div className='p-4 flex flex-col gap-4'>
                <div className='running-text-mono flex gap-2 justify-satrt items-center'>
                  <img
                    src='/Gems/Legendary.webp'
                    title='Legendary Gem'
                    alt='Legendary Coin, Coin to generate Images on the website'
                    className='h-5 w-5 object-contain'
                  />
                  <span>{subscription.reward.yellowCredits}</span>
                </div>
                <div className='running-text-mono flex gap-2 justify-satrt items-center'>
                  <img
                    src='/Gems/Mythic.webp'
                    title='Mythic Gem'
                    alt='Mythic coins, to make turns in the game'
                    className='h-5 w-5 object-contain'
                  />
                  <span>{subscription.reward.blueCredits}</span>
                </div>
              </div>
              <hr className='border border-white/[8%]' />
              <div className='flex flex-col p-4 gap-4'>
                <CustomButton
                  withIcon={true}
                  variant={"primary"}
                  className={"hidden md:flex justify-start  "}
                >
                  <Edit className='h-5 w-5 opacity-70 fill-black' />
                  <span> change subscription</span>
                </CustomButton>
                <CustomButton
                  onClick={() =>
                    handleCancelSubbscription(subscription.subscriptionId)
                  }
                  disabled={loading}
                  withIcon={true}
                  className={"hidden md:flex justify-start  "}
                >
                  <Delete className='h-5 w-5 opacity-70 fill-red-500' />
                  <span> cancel subscription</span>
                </CustomButton>
              </div>
            </div>
            <div className='uppercase flex flex-col gap-8 self-start '>
              <div className='flex flex-col gap-4'>
                <span className=' text-irisPurpleLight font-roboto-mono text-[10px]'>
                  Debit interval
                </span>
                <span className=' text-white running-text-mono'>
                  {subscription?.plan?.duration || "Null"}
                </span>
              </div>
              <div className='flex flex-col gap-4'>
                <span className=' text-irisPurpleLight font-roboto-mono text-[10px]'>
                  Next Renewal
                </span>
                <span className=' text-white running-text-mono'>
                  {getNextRenewal()}
                </span>
              </div>
              <div className='flex flex-col gap-4'>
                <span className=' text-irisPurpleLight font-roboto-mono text-[10px]'>
                  Last Invoice
                </span>
                <span className=' text-white running-text-mono'>
                  {formatDate(subscription.date)}
                </span>
              </div>
              <div className='flex flex-col gap-4'>
                <span className=' text-irisPurpleLight font-roboto-mono text-[10px]'>
                  Payment Method
                </span>
                <span className=' text-white running-text-mono'>
                  {subscription?.method[0] || "Card"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

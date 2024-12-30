import React, { useEffect, useState } from "react";
import CustomButton from "@/components/ui/custom-button";
import Download from "@/components/ui/Icons/Download";
import Edit from "@/components/ui/Icons/Edit";
import Delete from "@/components/ui/Icons/Delete";
import useUserStore from "@/utils/userStore";
import Diamond from "@/components/ui/Icons/Diamond";
import { useRouter } from "next/navigation";
import useCustomToast from "@/hooks/useCustomToast";
import {
  cancelSubscription,
  getInvoicePdf,
  getPaymentHistory,
} from "@/actions/payment";
import CancelSubscription from "@/components/ui/Shared/Dialogue/CancelSubscription";

const NoSubscription = ({ dictionary }) => {
  const router = useRouter();
  return (
    <div className='w-full p-6 flex items-center flex-col gap-6 justify-center text-center'>
      <span className=' running-text-large'>
        {dictionary.youHave}{" "}
        <span className='text-irisPurpleLight'>{dictionary.noActive}</span>{" "}
        <br />
        {dictionary.subscriptionsYet}
      </span>
      <CustomButton onClick={() => router.push("/pricing")} withIcon={true}>
        <Diamond className='h-5 w-5 opacity-70 fill-white' />
        {dictionary.upgrade}
      </CustomButton>
    </div>
  );
};

export default function Payment({ dictionary }) {
  const { user, updatePaymentHistory } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [loadingDownload, setLoadingDownload] = useState(false);
  const { invokeToast } = useCustomToast();

  let subscription = {};
  if (user.paymentHistory?.length > 0)
    subscription = user?.paymentHistory
      .filter(
        (data) => data.mode === "subscription" && data.status !== "canceled"
      )

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

  const handleGetInvoice = async (subscriptionId) => {
    try {
      setLoadingDownload(true);
      const { pdfUrl } = await getInvoicePdf(subscriptionId, user?.token);
      if (pdfUrl) {
        //download the pdf
        window.open(pdfUrl, "_blank");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoadingDownload(false);
    }
  };

  return (
    <div className='w-full md:w-4/5  md:px-28 flex flex-col gap-4'>
      <div className='w-full border border-white/[8%] rounded-[16px] bg-white/[8%]'>
        <div className='p-4 flex justify-between items-center'>
          <span className='headline-4'>{dictionary.activePayments}</span>
          <CustomButton
            disabled={loadingDownload}
            className=' hidden md:flex'
            onClick={() => handleGetInvoice(subscription.subscriptionId)}
            variant={"subtle"}
          >
            <Download className='h-5 w-5 opacity-70 fill-white' />
            {dictionary.downloadInvoice}
          </CustomButton>
        </div>
        <hr className='border border-white/[8%] ' />
        {!subscription?.reward ? (
          <NoSubscription dictionary={dictionary} />
        ) : (
          <div className='p-4 flex justify-start items-center gap-6 flex-col md:flex-row'>
            <div className='bg-white/[8%] uppercase border border-white/10 rounded-[16px] w-full md:w-[267px]'>
              <div className='p-4 flex flex-col gap-4'>
                <span className='running-text-mono  text-gray2'>
                  {subscription?.plan?.title || "NA"}
                </span>
                <span className='text-white headline-4'>
                  {subscription?.plan?.price || "NA"}
                  <span className='running-text-mono text-gray2'>
                    {" "}
                    /{dictionary.month}
                  </span>
                </span>
              </div>
              <hr className='border border-white/[8%]' />
              <div className='p-4 flex flex-col gap-4'>
                <div className='running-text-mono flex gap-2 justify-satrt items-center'>
                  <img
                    src='/gems/Legendary.webp'
                    title='Legendary Gem'
                    alt='Legendary Coin, Coin to generate Images on the website'
                    className='h-5 w-5 object-contain'
                  />
                  <span>{subscription.reward.yellowCredits}</span>
                </div>
                <div className='running-text-mono flex gap-2 justify-satrt items-center'>
                  <img
                    src='/gems/Mythic.webp'
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
                  className={" justify-start hidden "}
                >
                  <Edit className='h-5 w-5 opacity-70 fill-black' />
                  <span> {dictionary.changeSubscription}</span>
                </CustomButton>
                <CancelSubscription
                  action={() =>
                    handleCancelSubbscription(subscription.subscriptionId)
                  }
                >
                  <CustomButton
                    disabled={loading}
                    withIcon={true}
                    className={"flex justify-start  "}
                  >
                    <Delete className='h-5 w-5 opacity-70 fill-red-500' />
                    <span> {dictionary.cancelSubscription}</span>
                  </CustomButton>
                </CancelSubscription>
              </div>
            </div>
            <div className='uppercase flex flex-col gap-8 self-start   w-full   h-[135px] md:h-full flex-wrap'>
              <div className='flex flex-col gap-4'>
                <span className=' text-irisPurpleLight font-roboto-mono text-[10px]'>
                  {dictionary.debitInterval}
                </span>
                <span className=' text-white running-text-mono'>
                  {subscription?.plan?.duration || "Null"}
                </span>
              </div>
              <div className='flex flex-col gap-4'>
                <span className=' text-irisPurpleLight font-roboto-mono text-[10px]'>
                  {dictionary.nextRenewal}
                </span>
                <span className=' text-white running-text-mono'>
                  {getNextRenewal()}
                </span>
              </div>
              <div className='flex flex-col gap-4'>
                <span className=' text-irisPurpleLight font-roboto-mono text-[10px]'>
                  {dictionary.nextRenewal}
                </span>
                <span className=' text-white running-text-mono'>
                  {formatDate(subscription.date)}
                </span>
              </div>
              <div className='flex flex-col gap-4'>
                <span className=' text-irisPurpleLight font-roboto-mono text-[10px]'>
                  {dictionary.paymentMethod}
                </span>
                <span className=' text-white running-text-mono'>
                  {subscription?.method[0] || "Card"}
                </span>
              </div>
            </div>
            <CustomButton
              disabled={loadingDownload}
              onClick={() => handleGetInvoice(subscription.subscriptionId)}
              variant={"subtle"}
              className={"md:hidden self-start"}
            >
              <Download className='h-5 w-5 opacity-70 fill-white' />
              {dictionary.downloadInvoice}
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  );
}

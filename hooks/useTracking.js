import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useUserStore from "@/utils/userStore";
import { trackShares } from "@/actions/user";
import Cookie from "universal-cookie";
const useTracking = () => {
  const { user } = useUserStore();
  const cookies = new Cookie();
  const searchParams = useSearchParams();
  const [trackingParams, setTrackingParams] = useState({
    hasTracking: false,
    utmSource: null,
    utmUser: null,
  });

  const handleTrackShares = async (utmSource, utmUser) => {
    const token = cookies.get("token");
    try {
      //state hasnt loaded yet
      if (token && !user?.token) {
        return;
      }

      //if the user is the same as the one who shared
      if (utmUser === user._id) {
        console.log("returning");
        return;
      }

      await trackShares({
        type: utmSource,
        authorId: utmUser,
        userId: user._id,
      });
    } catch (error) {
      console.error("Error tracking shares:", error);
    }
  };

  useEffect(() => {
    const utmSource = searchParams.get("utm_source");
    const utmUser = searchParams.get("utm_user");

    const hasTracking = !!(utmSource || utmUser);
    if (hasTracking) {
      handleTrackShares(utmSource, utmUser);
    }
    setTrackingParams({
      hasTracking,
      utmSource,
      utmUser,
    });
  }, [searchParams, user]);

  return trackingParams;
};

export default useTracking;

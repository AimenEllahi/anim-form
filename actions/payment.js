import api from "./index";

export const createCheckoutSession = async (payload, token) => {
  try {
    const response = await api.post(
      "/payment/create-checkout-session",
      payload,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getPaymentHistory = async (token) => {
  try {
    const response = await api.get("/payment/payment-history", {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const cancelSubscription = async (subsId, token) => {
  try {
    const response = await api.delete(
      `/payment/subscriptions/${subsId}/cancel`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getInvoicePdf = async (subscriptionId, token) => {
  try {
    const response = await api.get(`/payment/invoice/${subscriptionId}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

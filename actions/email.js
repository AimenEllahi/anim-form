import api from "./index";

export const sendContact = async (payload) => {
  try {
    const response = await api.post(`/email`, payload);

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

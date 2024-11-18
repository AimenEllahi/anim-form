import api from "./index";

export const getAllAchievements = async () => {
  try {
    const response = await api.get("/achievements");

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getUserAchievements = async (token) => {
  try {
    const response = await api.get("/achievements/user", {
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

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

export const updateRank = async (token, rank) => {
  try {
    const response = await api.put(
      "/achievements/update-rank",
      { rank },
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

export const updateTitle = async (token, title) => {
  try {
    const response = await api.put(
      "/achievements/update-title",
      { title },
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

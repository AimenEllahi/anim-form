import api from "./index";

export const getImages = async (token, page, sort) => {
  try {
    const response = await api.get(`/user/images?page=${page}&sort=${sort}`, {
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

export const getPublicImages = async (page, sort) => {
  try {
    const response = await api.get(
      `/user/publicImages?page=${page}&sort=${sort}`
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const updateUser = async (token, payload) => {
  try {
    const response = await api.patch(`/user/update`, payload, {
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

export const updatePassword = async (token, payload) => {
  try {
    const response = await api.patch(`/user/update/password`, payload, {
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

export const trackShares = async (payload) => {
  try {
    const response = await api.post(`/user/trackShares`, payload);

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const likeImage = async (userId, imageId) => {
  try {
    const response = await api.post(`/user/likeImage`, {
      userId,
      imageId,
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const unlikeImage = async (token, imageId) => {
  try {
    const response = await api.post(
      `/user/unlikeImage/` + imageId,
      { imageId },
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

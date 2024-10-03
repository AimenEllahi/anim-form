import api from "./index";

export const createCampaign = async (campaign, token) => {
  try {
    const response = await api.post("/campaign", campaign, {
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

export const getCampaignsByUser = async (token) => {
  try {
    const response = await api.get("/campaign/user", {
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

export const getCampaignBySlug = async (slug, token) => {
  try {
    const response = await api.get(`/campaign/byId/${slug}`, {
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

export const starCampaign = async (id, token) => {
  try {
    const response = await api.patch(
      `/campaign/star/${id}`,
      {},
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

export const getFavoriteCampaigns = async (token) => {
  try {
    const response = await api.get("/campaign/favorite", {
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

export const commentOnCampaign = async (id, comment, token) => {
  try {
    const response = await api.post(
      `/campaign/comment/${id}`,
      { comment },
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

export const getComments = async (id, token) => {
  try {
    const response = await api.get(`/campaign/comments/${id}`, {
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

export const deleteCampaign = async (id, token) => {
  try {
    const response = await api.delete(`/campaign/${id}`, {
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

export const publishCampaign = async (id, token) => {
  try {
    const response = await api.patch(
      `/campaign/publish/${id}`,
      {},
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

export const unPublishCampaign = async (id, token) => {
  try {
    const response = await api.patch(
      `/campaign/unpublish/${id}`,
      {},
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

export const likeCampaign = async (id, token) => {
  try {
    const response = await api.patch(
      `/campaign/like/${id}`,
      {},
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

export const likeComment = async (commentId, token) => {
  try {
    const response = await api.patch(
      `/campaign/likeComment/${commentId}`,
      {},
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

export const deleteComment = async (commentId, token) => {
  try {
    const response = await api.delete(`/campaign/comment/${commentId}`, {
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

export const getMostLikedCampaigns = async (limit) => {
  try {
    const response = await api.get("/campaign/mostLiked?limit=" + limit);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getPopularCampaigns = async (sort, limit, query) => {
  try {
    const response = await api.get(
      "/campaign/popular?sort=" + sort + "&limit=" + limit + "&search=" + query
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const searchCampaigns = async (query) => {
  try {
    const response = await api.get(`/campaign/search?query=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getPublicCampaigns = async (page, sort) => {
  try {
    const response = await api.get(
      `/campaign/public?page=${page}&sort=${sort}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

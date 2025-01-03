import api from "./index";

export const initiateGame = async (payload, token) => {
  // console.log(payload);
  try {
    const response = await api.post("/gpt4/chat", payload, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error.response.data.message);
    throw error;
  }
};

export const generateGameImage = async (payload, token) => {
  try {
    const response = await api.post("/gpt4/generate-game-image", payload, {
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

export const textToSpeech = async (payload, token) => {
  try {
    const response = await api.post("/tts", payload, {
      headers: {
        Authorization: token,
      },
      responseType: "blob", // Ensure the response is a blob
    });

    const blob = new Blob([response.data], { type: "audio/mpeg" });
    const url = URL.createObjectURL(blob);
    // console.log(url);
    return url;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const addChoice = async (payload, token) => {
  try {
    const response = await api.post("/gpt4/user-input", payload, {
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

export const saveCharacter = async (payload, token) => {
  try {
    const response = await api.post("/gpt4/save-character", payload, {
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

export const getGame = async (id, token) => {
  try {
    const response = await api.get(`/gpt4/game/${id}`, {
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

export const getGames = async (token) => {
  try {
    const response = await api.get("/games", {
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

export const deleteGame = async (gameId, token) => {
  try {
    const response = await api.delete(`/games/${gameId}`, {
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

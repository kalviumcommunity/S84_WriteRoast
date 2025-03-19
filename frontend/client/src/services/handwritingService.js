import axios from "axios";

const API_BASE_URL = "https://s84-writeroast.onrender.com/api"; // Update with your backend URL if different

// Fetch handwriting data from the backend
export const getHandwritingData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/handwriting`);
    return response.data;
  } catch (error) {
    console.error("Error fetching handwriting data:", error);
    throw error;
  }
};

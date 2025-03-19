const API_BASE_URL = "https://s84-writeroast.onrender.com/api"; // Change this to your backend URL

// Fetch recent handwriting entries
export async function fetchEntries() {
    try {
        const response = await fetch(`${API_BASE_URL}/handwriting`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching recent handwriting entries:", error);
        return [];
    }
}


import axios from "axios";

const BASE_URL = "https://api.petfinder.com/v2";
const API_KEY = "PkBAMLuzxJZ9bCAv4aR0aYmLkQqorTYTKEfryLXihSsfUGScH7";
const API_SECRET = "q6HP4HQJvkMzZy30CNqMG7wqJu2fTxuL1ta8M4lW";

// Function to get a new access token
async function getAccessToken() {
  const response = await axios.post(`${BASE_URL}/oauth2/token`, {
    grant_type: "client_credentials",
    client_id: API_KEY,
    client_secret: API_SECRET,
  });
  return response.data.access_token;
}

export async function fetchPets(petType, { breed = "", location = "" } = {}) {
  const accessToken = await getAccessToken();
  let queryParams = `type=${encodeURIComponent(petType)}`;

  if (breed) {
    queryParams += `&breed=${encodeURIComponent(breed)}`;
  }

  if (location) {
    queryParams += `&location=${encodeURIComponent(location)}`;
  }

  const url = `${BASE_URL}/animals?${queryParams}`;

  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

// A new function to fetch details for a single pet by its ID
export async function fetchPetDetails(petId) {
  try {
    const accessToken = await getAccessToken();
    const url = `${BASE_URL}/animals/${petId}`;
    console.log(`Making request to: ${url}`); // Log the request URL
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.animal;
  } catch (error) {
    console.error("Error fetching pet details:", error.response || error);
    throw error; // Rethrow the error if you want to handle it in the component
  }
}

export async function fetchShelters(location) {
  const accessToken = await getAccessToken();
  try {
    const response = await axios.get(`${BASE_URL}/organizations`, {
      params: { location },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data; // Make sure this matches the expected format
  } catch (error) {
    console.error("Error fetching shelters:", error);
    throw error; // Ensure errors are thrown correctly for catching in the component
  }
}


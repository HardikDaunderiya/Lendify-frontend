export const getAccessToken = () => {
  const tokenString = localStorage.getItem("user");
  if (!tokenString) {
    console.error("No user token found in localStorage");
    return null; // Return null if no token is found
  }

  try {
    const tokenObject = JSON.parse(tokenString);
    const accessToken = tokenObject.AccessToken;

    return accessToken; // Return the access token
  } catch (error) {
    console.error("Error parsing JSON string from localStorage:", error);
    return null; // Return null in case of an error
  }
};

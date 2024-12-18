const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = async (formData) => {
  const response = await fetch(`${API_URL}/api/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  return response.json();
};

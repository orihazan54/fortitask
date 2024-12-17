const API_URL = 'https://api.fortitask.org';

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

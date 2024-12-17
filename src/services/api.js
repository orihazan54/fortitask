const API_URL = process.env.REACT_APP_API_URL;

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/api/data`); // קריאה לשרת
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return 'Error';
  }
};

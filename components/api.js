const BASE_URL = 'http://localhost:3000'; // Replace with your server address

// Function to fetch categories
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/categories`);
    if (!response.ok) {
      throw new Error('Error fetching categories');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Error fetching categories');
  }
};
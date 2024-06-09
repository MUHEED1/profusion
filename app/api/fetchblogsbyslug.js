import axiosInstance from "./axiosinstance"; // Import your axios instance
export async function fetchcasestudiesbyslug(slug) {
  try {
    const response = await axiosInstance.get(
      `/casestudies?filters[slug]=${slug}&populate=*`
    ); // Adjust the endpoint as needed
    return response.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
}

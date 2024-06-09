import instance from "./axiosinstance";
export async function fetchcasestudies(blogsno) {
  try {
    const response = await instance.get("/casestudies?populate=*");
    // console.log(response)
    return response.data.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

import axios from "axios";
import { NEWS_API_BASE_URL, NEWS_API_KEY } from "../Constants/ApiConstant";

export async function fetchTopHeadlines() {
  try {
    const response = await axios.get(
      `${NEWS_API_BASE_URL}/top-headlines?country=in&apiKey=${NEWS_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
}

export async function fetchAllNews(topic) {
  try {
    const response = await axios.get(
      `${NEWS_API_BASE_URL}/everything?q=${topic}&apiKey=${NEWS_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching all news:", error);
    throw error; // Re-throw the error to propagate it to the caller for further handling
  }
}

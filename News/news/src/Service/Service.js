import { NEWS_API_BASE_URL, NEWS_API_KEY } from "../Constant/Constant";
import axios from "axios";

export function fetchTopHeadlines() {
  return axios.get(
    `${NEWS_API_BASE_URL}/top-headlines?country=in&apiKey=${NEWS_API_KEY}`
  );
}
export function fetchAllNews(topic) {
  return axios.get(
    `${NEWS_API_BASE_URL}/everything?q=${topic}&apiKey=${NEWS_API_KEY}`
  );
}

import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-zah4.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};


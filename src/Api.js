import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-zah4.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({data}) => {
    return data.article
  })
}

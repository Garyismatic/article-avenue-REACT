import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-zah4.onrender.com/api",
});

export const getArticles = (topic, sort_by, order) => {
  return api.get("/articles", { params: { topic, sort_by, order } }).then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const updateArticleVotes = (article_id, votes) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then(({ data }) => {
      return data.articleUpdated;
    });
};

export const getArticleComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (article_id, user, comment) => {
  return api
    .post(`/articles/${article_id}/comments`, { username: user, body: comment })
    .then(({ data }) => {
      return data.commentPosted;
    });
};

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`);
};

export const getTopics = () => {
  return api.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

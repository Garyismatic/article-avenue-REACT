import { useEffect, useState } from "react";
import Articles from "./Articles";
import { getArticles } from "../Api";
import { Routes, Route } from "react-router-dom";
import ArticleById from "./ArticleById";
import ArticleComments from "./ArticleComments";

function Feed() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticles().then((articlesArray) => {
      setArticles(articlesArray);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Articles articles={articles} />} />
        <Route path="/articles" element={<Articles articles={articles} />} />
        <Route
          path="/articles/:article_id"
          element={<ArticleById article={article} setArticle={setArticle} />}
        />
        <Route
          path="/articles/:article_id/comments"
          element={
            <ArticleComments article={article} setArticle={setArticle} />
          }
        />
      </Routes>
    </>
  );
}

export default Feed;

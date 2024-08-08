import { useEffect, useState } from "react";
import Articles from "./Articles";
import { getArticles } from "../Api";
import { Routes, Route, useSearchParams } from "react-router-dom";
import ArticleById from "./ArticleById";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Loading.json";

function Feed({ topic, setTopic }) {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");

  useEffect(() => {
    getArticles(topicQuery)
      .then((articlesArray) => {
        setArticles(articlesArray);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topicQuery]);

  if (isLoading) {
    return <Lottie animationData={loadingAnimation} loop={true} />;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Articles articles={articles} topic={topic} setTopic={setTopic} />
          }
        />
        <Route
          path="/articles"
          element={
            <Articles articles={articles} topic={topic} setTopic={setTopic} />
          }
        />
        <Route
          path="/articles/:article_id"
          element={
            <ArticleById
              article={article}
              setArticle={setArticle}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
      </Routes>
    </>
  );
}

export default Feed;

import { Route, Routes, useParams } from "react-router-dom";
import { getArticleById } from "../Api";
import { useEffect, useState } from "react";
import ArticleByIdHeader from "./ArticleByIdHeader";
import ArticleActions from "./ArticleActions";
import ArticleByIdContent from "./ArticleByIdContent";
import ArticleComments from "./ArticleComments";

function ArticleById(props) {
  const { article_id } = useParams();
  const { article, setArticle } = props;

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  return (
    <>
      <div style={{ margin: 15 }}>
        <ArticleByIdHeader article={article} />
        <ArticleActions article={article} article_id={article_id} />
        <ArticleByIdContent article={article} />
        <ArticleComments />
      </div>
    </>
  );
}

export default ArticleById;

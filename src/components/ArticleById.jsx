import { useParams } from "react-router-dom";
import { getArticleById } from "../Api";
import { useEffect, useState } from "react";
import ArticleByIdHeader from "./ArticleByIdHeader";
import ArticleActions from "./ArticleActions";
import ArticleByIdContent from "./ArticleByIdContent";

function ArticleById() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});



  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, []);



  return (
    <>
    <div style={{margin: 15}}>
      <ArticleByIdHeader article={article} />
      <ArticleActions article ={article} />
      <ArticleByIdContent article={article} />
    </div>
    </>
  );
}

export default ArticleById;

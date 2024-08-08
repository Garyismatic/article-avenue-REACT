import { useParams } from "react-router-dom";
import { getArticleById } from "../Api";
import { useEffect, useState } from "react";
import ArticleByIdHeader from "./ArticleByIdHeader";
import ArticleActions from "./ArticleActions";
import ArticleByIdContent from "./ArticleByIdContent";
import ArticleComments from "./ArticleComments";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Loading.json";

function ArticleById({ article, setArticle, isLoading, setIsLoading }) {
  const { article_id } = useParams();
  const [articleLoading, setArticleLoading] = useState(true)
  
  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    }).finally(() => {
      setArticleLoading(false)
    });
  }, []);

  if (articleLoading) {
    return <Lottie animationData={loadingAnimation} loop={true} />;
  }

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

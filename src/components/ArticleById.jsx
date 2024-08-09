import { useParams } from "react-router-dom";
import { getArticleById } from "../Api";
import { useEffect, useState } from "react";
import ArticleByIdHeader from "./ArticleByIdHeader";
import ArticleActions from "./ArticleActions";
import ArticleByIdContent from "./ArticleByIdContent";
import ArticleComments from "./ArticleComments";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Loading.json";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function ArticleById({ article, setArticle }) {
  const { article_id } = useParams();
  const [articleLoading, setArticleLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
      })
      .catch(({ response }) => {
        setError(response);
      })
      .finally(() => {
        setArticleLoading(false);
      });
  }, []);

  if (articleLoading) {
    return <Lottie animationData={loadingAnimation} loop={true} />;
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", margin: 100, fontSize: 40 }}>
        <h1>{error.status}</h1>
        <p>{error.data.message}</p>
        <ErrorOutlineIcon fontSize="large" color="error" sx={{ m: 5 }} />
      </div>
    );
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

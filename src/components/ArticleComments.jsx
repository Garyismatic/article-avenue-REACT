import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments, getArticleById } from "../Api";
import CommentIcon from "@mui/icons-material/Comment";
import "./CSS-modules/articleComments.css";
import Button from "@mui/material/Button";
import CommentCard from "./CommentCard";

function ArticleComments(props) {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const { article, setArticle } = props;

  useEffect(() => {
    getArticleComments(article_id).then((comments) => {
      setComments(comments);
    });
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  return (
    <>
      <section className="comments-header">
        <h2 className="article-comments-title">{article.title}</h2>
        <Button variant="outlined" endIcon={<CommentIcon />}>
          ADD
        </Button>
      </section>
      <div className="add-comment-button"></div>
      {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.comment_id} />;
      })}
    </>
  );
}

export default ArticleComments;

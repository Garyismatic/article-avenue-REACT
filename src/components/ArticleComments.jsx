import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments, getArticleById } from "../Api";
import "./CSS-modules/articleComments.css";
import CommentCard from "./CommentCard";

function ArticleComments(props) {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [comments]);

  return (
    <>
      {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.comment_id} />;
      })}
    </>
  );
}

export default ArticleComments;

import { Button, IconButton } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import CommentIcon from "@mui/icons-material/Comment";
import "./CSS-modules/articleActions.css";
import { useState } from "react";
import { updateArticleVotes } from "../Api";
import { useNavigate } from "react-router-dom";

function ArticleActions(props) {
  const { article, article_id } = props;
  const [voteCount, setVoteCount] = useState(0);
  const navigate = useNavigate()

  const handleUpVote = () => {
    setVoteCount((currVoteCount) => {
      return currVoteCount + 1;
    });
    updateArticleVotes(article_id, 1).catch(() => {
      setVoteCount((currVoteCount) => {
        return currVoteCount - 1;
      });
    });
  };

  const handleDownVote = () => {
    setVoteCount((currVoteCount) => {
      return currVoteCount - 1;
    });
    updateArticleVotes(article_id, -1).catch(() => {
      setVoteCount((currVoteCount) => {
        return currVoteCount + 1;
      });
    });
  };


  return (
    <>
      <div className="article-actions">
        <section className="vote-article">
          <IconButton aria-label="vote up" size="large" onClick={handleUpVote}>
            <ArrowCircleUpIcon />
          </IconButton>
          <h4>Votes: {article.votes + voteCount}</h4>
          <IconButton
            aria-label="vote down"
            size="large"
            onClick={handleDownVote}
          >
            <ArrowCircleDownIcon />
          </IconButton>
        </section>
        <section className="article-comments">
          <Button variant="outlined" endIcon={<CommentIcon />}>
           Add Comment
          </Button>
        </section>
      </div>
    </>
  );
}

export default ArticleActions;

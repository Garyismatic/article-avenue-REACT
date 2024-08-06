import { Button, IconButton } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import CommentIcon from "@mui/icons-material/Comment";
import "./CSS-modules/articleActions.css";

function ArticleActions(props) {
  const { article } = props;

  return (
    <>
      <div className="article-actions">
        <section className="vote-article">
          <IconButton aria-label="vote up" size="large">
            <ArrowCircleUpIcon />
          </IconButton>
          <h4>Votes: {article.votes}</h4>
          <IconButton aria-label="vote down" size="large">
            <ArrowCircleDownIcon />
          </IconButton>
        </section>
        <section className="article-comments">
          <Button variant="outlined" endIcon={<CommentIcon />}>
            View Comments: {article.comment_count}
          </Button>
        </section>
      </div>
    </>
  );
}

export default ArticleActions;

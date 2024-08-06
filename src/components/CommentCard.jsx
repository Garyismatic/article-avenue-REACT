import { Card, CardContent, Typography } from "@mui/material";
import "./CSS-modules/commentCard.css";

function CommentCard(props) {
  const { comment } = props;
  return (
    <>
      <div className="comment-card">
        <Card>
          <CardContent>
            <div className="comment-header">
            <Typography variant="h6" gutterBottom>
              {comment.author}
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="text.secondary">
              {comment.created_at.slice(0, 10)}
            </Typography>
            </div>
            <div className="comment-body">
              <Typography variant="body2">{comment.body}</Typography>
            </div>
            <div className="comment-votes">
              <Typography variant="subtitle1" gutterBottom>
                Votes: {comment.votes}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default CommentCard;

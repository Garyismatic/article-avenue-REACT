import { Card, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CSS-modules/commentCard.css";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { deleteComment } from "../Api";

function CommentCard(props) {
  const { comment } = props;
  const { user } = useContext(UserContext);
  const [deleteErr, setDeleteErr] = useState('')
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    deleteComment(comment.comment_id).then(() => {
      setClicked(false)
    }).catch((err) => {
      setDeleteErr('Request Failed')
      setClicked(false)
    })
  }

  let deleteButton = <></>;

  if (user === comment.author) {
    deleteButton = (
      <IconButton size="small" onClick={handleClick} disabled={clicked}>
        <DeleteIcon />
      </IconButton>
    );
  }

  return (
    <>
      <div className="comment-card">
        <Card>
          <CardContent>
            <div className="comment-header">
              <Typography variant="h6" gutterBottom>
                {comment.author}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                color="text.secondary"
              >
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
              {deleteButton}
            </div>
            <p className="delete-err-msg">{deleteErr}</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default CommentCard;

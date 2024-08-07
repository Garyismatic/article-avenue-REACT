import { Box, Button, Drawer, TextField } from "@mui/material";
import "./CSS-modules/commentInput.css";
import { useContext, useState } from "react";
import { postComment } from "../Api";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/user";

function CommentInput(props) {
  const { article_id } = useParams();
  const [input, setInput] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [clicked, setClicked] = useState(false)
  const { commentOpen, setCommentOpen } = props;
  const { user } = useContext(UserContext);

  const toggleDrawer = () => {
    setClicked(false)
    setCommentOpen((currCommentOpen) => {
      return !currCommentOpen;
    });
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    if (input.length > 0) {
        setClicked(!clicked)
      postComment(article_id, user, input)
        .then((postedComment) => {
          setInput("");
          setErrMsg('')
          toggleDrawer();
        })
        .catch((err) => { 
          setErrMsg("Error Comment Not Posted...");
          setClicked(false)
        });
    }else{
        toggleDrawer()
    }
  };

  const commentField = (
    <div className="comment-input-field">
      <Box sx={{ width: 4 / 5 }}>
        <TextField
          id="comment-input"
          label="Comment"
          multiline
          minRows={10}
          sx={{ width: 1 }}
          onChange={handleChange}
          defaultValue={input}
        />
        <div className="comment-input-field">
          <Button
            htmlFor="comment-input"
            onClick={handleClick}
            variant="contained"
            disabled={clicked}
          >
            Submit
          </Button>
          <p className="comment-err-msg">{errMsg}</p>
        </div>
      </Box>
    </div>
  );

  return (
    <>
      <Drawer open={commentOpen} anchor="bottom" onClose={toggleDrawer}>
        {commentField}
      </Drawer>
    </>
  );
}

export default CommentInput;

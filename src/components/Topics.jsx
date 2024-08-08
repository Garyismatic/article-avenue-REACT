import { useState, useEffect } from "react";
import { getTopics } from "../Api";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./CSS-modules/topics.css";

function Topics() {
  const [topics, setTopics] = useState([]);

  //   useEffect(() => {
  //     getTopics().then((topics) => {
  //       setTopics(topics);
  //     });
  //   }, []);

  const handleSelect = () => {};

  return (
    <>
      <div className="topic-select">
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="topics-label">Topics</InputLabel>
          <Select
            labelId="topics-label"
            id="topics"
            value={""}
            label="topics"
            onChange={handleSelect}
          >
            <MenuItem value={""}>TBC</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default Topics;

import { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./CSS-modules/topics.css";
import { useNavigate } from "react-router-dom";
import { getTopics } from "../Api";

function Topics({ topic, setTopic }) {
  const [topics, setTopics] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  const handleSelect = (event) => {
    if (event.target.value === "All Topics") {
      setTopic("All Topics");
      navigate("/articles");
    } else {
      setTopic(event.target.value);
      navigate(`/articles?topic=${event.target.value}`);
    }
  };

  return (
    <>
      <div className="topic-select">
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="topics-label">Topics</InputLabel>
          <Select
            labelId="topics-label"
            id="topics"
            label="topics"
            onChange={handleSelect}
            value={topic}
          >
            <MenuItem key="all-topics" value={"All Topics"}>
              All Topics
            </MenuItem>
            {topics.map((topic) => {
              return (
                <MenuItem key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default Topics;

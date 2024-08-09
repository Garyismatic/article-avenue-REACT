import { useState, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./CSS-modules/topics.css";
import { useNavigate } from "react-router-dom";
import { getTopics } from "../Api";

function Topics({ topic, setTopic, sort, order }) {
  const [topics, setTopics] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, [topics]);

  const handleSelect = (event) => {
    if (event.target.value === "All Topics" && sort && order) {
      setTopic("");
      navigate(`/articles?sort_by=${sort}&order=${order}`);
    } else if (event.target.value === "All Topics" && sort) {
      setTopic("");
      navigate(`/articles?sort_by=${sort}`);
    } else if (event.target.value === "All Topics") {
      setTopic("");
      navigate("/articles");
    } else if (sort && order) {
      setTopic(event.target.value);
      navigate(
        `/articles?topic=${event.target.value}&sort_by=${sort}&order=${order}`
      );
    } else if (sort) {
      setTopic(event.target.value);
      navigate(`/articles?topic=${event.target.value}&sort_by=${sort}`);
    } else if (order) {
      setTopic(event.target.value);
      navigate(`/articles?topic=${event.target.value}&order=${order}`);
    } else {
      setTopic(event.target.value);
      navigate(`/articles?topic=${event.target.value}`);
    }
  };

  return (
    <>
      <div className="topic-select">
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="topics-label">Topic</InputLabel>
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
                  {topic.slug.toUpperCase()}
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

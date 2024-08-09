import {
  FormControl,
  FormGroup,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import "./CSS-modules/articleSortOptions.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ArticleSortOptions({ topic, order, setOrder, sort, setSort }) {
  const navigate = useNavigate();

  const handleSelect = (event) => {
    setSort(event.target.value);
    if (topic) {
      navigate(
        `/articles?topic=${topic}&sort_by=${event.target.value}&order=${order}`
      );
    } else {
      navigate(`/articles?sort_by=${event.target.value}&order=${order}`);
    }
  };

  const handleSwitch = (event) => {
    event.target.checked ? setOrder("asc") : setOrder("desc");
  };

  useEffect(() => {
    if (topic && sort) {
      navigate(`/articles?topic=${topic}&sort_by=${sort}&order=${order}`);
    } else if (topic) {
      navigate(`/articles?topic=${topic}&order=${order}`);
    } else if (sort) {
      navigate(`/articles?sort_by=${sort}&order=${order}`);
    } else if (order){
      navigate(`/articles?order=${order}`);
    }
  }, [order]);

  return (
    <>
      <section className="article-options">
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="sort-by-label">Sort-By</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={sort}
            label="Sort-By"
            onChange={handleSelect}
          >
            <MenuItem key={"created_at"} value={"created_at"}>
              Date
            </MenuItem>
            <MenuItem key={"comment_count"} value={"comment_count"}>
              Comments
            </MenuItem>
            <MenuItem key={"votes"} value={"votes"}>
              Votes
            </MenuItem>
          </Select>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={<Switch onChange={handleSwitch} defaultChecked={false} />}
            label="Order"
          />
        </FormGroup>
      </section>
    </>
  );
}

export default ArticleSortOptions;

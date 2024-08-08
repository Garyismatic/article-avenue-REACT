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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ArticleSortOptions() {
  const sortOptions = ["Date", "Comments", "Votes"];
  const [sortBy, setSortBy] = useState("Date");
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState('desc')
  const navigate = useNavigate();

  const handleSelect = (event) => {
    setSortBy(event.target.value);
    switch (event.target.value) {
      case "Comments":
        setSort("comment_count");
        break;
      case "Votes":
        setSort("votes");
        break;
      default:
        setSort("created_at");
    }
  };

  useEffect(() => {
    if(sort) { 
      navigate(`/articles?sort_by=${sort}&order=${order}`)
    }

  }, [sort, order]);

  const handleSwitch = () => {
    order === 'desc' ? setOrder('asc') : setOrder('desc')
  };

  return (
    <>
      <section className="article-options">
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="sort-by-label">Sort-By</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={sortBy}
            label="Sort-By"
            onChange={handleSelect}
          >
            {sortOptions.map((option) => {
              return (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={<Switch onChange={handleSwitch} />}
            label="Order"
          />
        </FormGroup>
      </section>
    </>
  );
}

export default ArticleSortOptions;

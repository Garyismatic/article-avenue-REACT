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

function ArticleSortOptions() {
  const handleSelect = () => {};

  const handleSwitch = () => {};

  return (
    <>
      <section className="article-options">
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="sort-by-label">Sort-By</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by"
            value={""}
            label="Sort-By"
            onChange={handleSelect}
          >
            <MenuItem value={""}>TBC</MenuItem>
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

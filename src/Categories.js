import React, { useState, useEffect } from "react";
import "./Categories.scss";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const Categories = ({ catfield }) => {
  const classes = useStyles();
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  useEffect(() => {
    catfield(category);
  }, [category, catfield]);
  return (
    <div className="categories">
      <FormControl className={classes.formControl}>
        <InputLabel style={{ color: "dodgerblue" }} id="categorySelector">
          Category
        </InputLabel>
        <Select
          style={{ color: "white" }}
          labelId="categorySelector"
          value={category}
          id="categorySelector"
          onChange={handleChange}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"beef"}>Beef</MenuItem>
          <MenuItem value={"chicken"}>Chicken</MenuItem>
          <MenuItem value={"dessert"}>Dessert</MenuItem>
          <MenuItem value={"lamb"}>Lamb</MenuItem>
          <MenuItem value={"miscellaneous"}>Miscellaneous</MenuItem>
          <MenuItem value={"pasta"}>Pasta</MenuItem>
          <MenuItem value={"pork"}>Pork</MenuItem>
          <MenuItem value={"seafood"}>Seafood</MenuItem>
          <MenuItem value={"side"}>Side</MenuItem>
          <MenuItem value={"starter"}>Starter</MenuItem>
          <MenuItem value={"vegan"}>Vegan</MenuItem>
          <MenuItem value={"vegetarian"}>Vegetarian</MenuItem>
          <MenuItem value={"breakfast"}>Breakfast</MenuItem>
          <MenuItem value={"goat"}>Goat</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Categories;

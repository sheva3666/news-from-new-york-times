import React, { useContext } from "react";
import { useStyles } from "./style";
import { FiltersNames, globalSearch } from "../../constants";
import GeneralContext from "../../contexts/GeneralContext";
import Select from "../Select/Select";
import { NavLink } from "react-router-dom";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";

const Filters = () => {
  const {
    state: { currentCategory, searchInput },
    onChangeCategory,
    setSearchInput,
  } = useContext(GeneralContext);
  const classes = useStyles();
  const options = FiltersNames.map((name) => ({ value: name, label: name }));

  return (
    <div className={classes.container}>
      <input
        className={classes.search}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="search"
        placeholder="Search..."
        id=""
      />
      <NavLink className={classes.link} to={`/globalSearch`}>
        {capitalizeFirstLetter(globalSearch)}
      </NavLink>
      <Select
        options={options}
        onChange={onChangeCategory}
        value={currentCategory.section}
      />
    </div>
  );
};

export default Filters;

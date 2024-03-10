import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStyles } from "./style";
import { linksCategories } from "../../constants";
import GeneralContext from "../../contexts/GeneralContext";

const Header = () => {
  const {
    state: { searchInput },
    onChangeCategory,
    setSearchInput,
  } = useContext(GeneralContext);

  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Link
        onClick={() => onChangeCategory("home")}
        className={classes.navLogo}
        to={"/"}
      >
        <h6>News</h6>
      </Link>

      <div className={classes.navigation}>
        <input
          className={classes.search}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="search"
          placeholder="Search..."
          id=""
        />
        {linksCategories.map((category) => (
          <NavLink key={category} className={classes.link} to={`/globalSearch`}>
            {category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;

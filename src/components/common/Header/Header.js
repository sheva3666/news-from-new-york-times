import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
import GeneralContext from "../../contexts/GeneralContext";

const Header = () => {
  const { onChangeCategory } = useContext(GeneralContext);

  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Link
        onClick={() => onChangeCategory("home")}
        className={classes.navLogo}
        to={"/"}
      >
        News
      </Link>
    </div>
  );
};

export default Header;

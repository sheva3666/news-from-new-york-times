import React, { useRef, useEffect, useContext } from "react";
import { CircularProgress } from "@material-ui/core";

import { Link } from "react-router-dom";
import { useStyles } from "./style";
import GeneralContext from "../../contexts/GeneralContext";

const Footer = () => {
  const classes = useStyles();
  const {
    state: { footerText },
    error,
    loading,
  } = useContext(GeneralContext);

  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
  }, []);
  if (error) return <p>{error}</p>;
  return (
    <div className={classes.footer}>
      <Link className={classes.navLogo} to={"/"}>
        <h6>News</h6>
        <div className={classes.description}>
          {loading ? (
            <div className={classes.loader}>
              <CircularProgress />
            </div>
          ) : (
            footerText
          )}
        </div>
      </Link>
    </div>
  );
};

export default Footer;

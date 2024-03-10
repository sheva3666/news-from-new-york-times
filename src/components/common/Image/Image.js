import React from "react";
import useStyles from "./style";

const Image = ({ image, details }) => {
  const classes = useStyles();
  return (
    <div className={classes.imageContainer}>
      <img
        className={details ? classes.detailsImg : classes.img}
        src={image?.url}
        alt=""
      />
    </div>
  );
};

export default Image;

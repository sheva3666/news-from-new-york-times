import React from "react";
import NewsDetailsCard from "../NewsDetailsCard/NewsDetailsCard";
import useStyles from "./style";

const ModalLayout = ({ onClose, news, globalSearch }) => {
  const classes = useStyles();
  return (
    <div onClick={() => onClose(false)} className={classes.modal}>
      <div className={classes.content}>
        <NewsDetailsCard news={news} globalSearch={globalSearch} />
      </div>
    </div>
  );
};

export default ModalLayout;

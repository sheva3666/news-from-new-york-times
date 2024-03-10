import React from "react";
import { Modal, Box, Fade } from "@material-ui/core";
import NewsDetailsCard from "../NewsDetailsCard/NewsDetailsCard";
import { useStyles } from "./style";

const ModalLayout = ({ open, handleClose, news, globalSearch }) => {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Fade in={open}>
        <Box className={classes.modal}>
          <NewsDetailsCard news={news} globalSearch={globalSearch} />
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalLayout;

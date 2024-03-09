import React from "react";
import { Modal, Box, Fade } from "@material-ui/core";
import NewsDetailsCard from "../NewsDetailsCard/NewsDetailsCard";
import { useStyles } from "./style";

const ModalLayout = ({ open, handleClose, news }) => {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Fade in={open}>
        <Box className={classes.modal}>
          <NewsDetailsCard news={news} />
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalLayout;

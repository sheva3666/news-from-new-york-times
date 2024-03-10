import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  },

  img: {
    width: "100%",
    height: "100%",
  },

  detailsImg: {
    width: "50% !important",
    height: "50% !important",
  },
}));

export default useStyles;

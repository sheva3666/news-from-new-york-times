import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  topTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 15px",
    marginTop: "5px",
    textTransform: "capitalize",
  },

  time: {
    fontSize: "10px",
  },
}));
export default useStyles;

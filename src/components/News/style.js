import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "5px 15px",
    textAlign: "center",
  },
  newsBox: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap: "20px",
  },

  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "300px",
  },

  message: {
    fontSize: "30px",
    fontWeight: theme.font.weight.bold,
  },
  "@media only screen and (max-width: 700px)": {
    newsBox: {
      gridTemplateColumns: "auto",
    },
  },
}));
export default useStyles;

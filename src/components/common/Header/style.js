import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  header: {
    top: 0,
    left: 0,
    right: 0,
    padding: "20px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.colors.secondary.main,
    position: "fixed",
  },

  navLogo: {
    display: "flex",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    color: theme.colors.primary.main,
    fontWeight: theme.font.weight.bold,
    width: "120px",
    fontSize: "25px",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: "pointer",
  },
}));

import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    gap: 30,
    top: 64,
    left: 0,
    right: 0,
    padding: "15px 30px",
    position: "fixed",
    background: theme.colors.primary.main,
    marginLeft: -70,
  },

  filter: {
    padding: "6.5px 7px",
    borderRight: `1px solid ${theme.colors.secondary.main}`,
    textTransform: "capitalize",
    fontSize: "15px",
    transition: "0.2s",
    cursor: "pointer",
    textAlign: "center",
    "&:hover": {
      fontWeight: theme.font.weight.bold,
      background: "rgba(235, 235, 235, 0.815)",
    },
  },
  search: {
    width: 295,
    borderRadius: "30px",
    fontSize: "16px",
    padding: "10px 20px",
  },
  link: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    color: theme.colors.secondary.main,
    border: `2px solid ${theme.colors.secondary.main}`,
    borderRadius: "30px",
    padding: "10px 20px",
    width: 250,
    "&:hover": {
      background: theme.colors.secondary.main,
      color: theme.colors.primary.main,
    },
  },

  "@media only screen and (max-width: 700px)": {
    container: {
      flexDirection: "column",
      alignItems: "center",
      marginLeft: 0,
      gap: 5,
    },
  },
}));

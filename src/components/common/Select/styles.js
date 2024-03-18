import { createUseStyles } from "react-jss";

export default createUseStyles({
  selectContainer: {
    position: "relative",
    width: "200px",
  },
  select: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    appearance: "none",
    padding: "10px 20px",
    border: "2px solid #000",
    borderRadius: "20px",
    backgroundColor: "#f0f0f0",
    fontSize: "16px",
    width: 250,
    cursor: "pointer",
    "&:focus": {
      outline: "none",
      borderColor: "#007bff",
    },
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: "0",
    right: "0",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: "100",
    maxHeight: 300,
    overflowY: "auto",
  },
  option: {
    padding: "10px 20px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
  arrow: {
    marginTop: 3,
  },
  "@media only screen and (max-width: 700px)": {
    selectContainer: {
      marginLeft: -90,
    },
  },
});

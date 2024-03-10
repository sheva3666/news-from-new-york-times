import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  modal: {
    display: "flex",
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,.5)",
  },

  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    padding: "20px",
    border: "1px solid #888",
    background: "#fff",
    borderRadius: 30,
    boxShadow: "#fff 0px 10px 36px 0px, #fff 0px 0px 0px 1px",
  },

  footer: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    padding: "20px 20px",
  },

  "@media only screen and (max-width: 900px)": {
    content: {
      width: "85%",
      margin: "30% auto",
    },
  },
}));

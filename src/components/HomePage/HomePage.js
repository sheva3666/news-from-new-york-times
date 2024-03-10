import { useContext, useEffect } from "react";
import Filters from "../common/Filters/Filters";
import News from "../News/News";
import { useStyles } from "./style";
import BackToTopButton from "../common/BackToTopButton/BackToTopButton";
import GeneralContext from "../contexts/GeneralContext";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const { pathname } = useLocation();
  const {
    state: { currentCategory, data },
    onChangeCategory,
    error,
    loading,
  } = useContext(GeneralContext);

  useEffect(() => {
    onChangeCategory(pathname === "/" ? "home" : pathname.slice(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
        <Filters onChangeCategory={onChangeCategory} />
      </div>
      <div className={classes.rightColumn}>
        <News
          currentCategory={currentCategory}
          currentNews={data}
          loadinNews={loading}
          newsError={error}
        />
      </div>
      <BackToTopButton />
    </div>
  );
};

export default HomePage;

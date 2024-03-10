import React, { useEffect, useState } from "react";
import useStyles from "./style";
import { CircularProgress } from "@material-ui/core";

import NewsCard from "../common/NewsCard/NewsCard";
import Title from "../common/Title/Title";
import ModalLayout from "../common/ModalLayout/ModalLayout";

const News = ({
  currentNews,
  loadinNews,
  newsError,
  currentCategory,
  globalSearch,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [newsDetails, setNewsDetails] = useState(null);
  const classes = useStyles();

  useEffect(() => {}, [currentCategory]);

  // open modal window with details info
  const onOpenDetails = (news) => {
    setOpenModal(true);
    setNewsDetails(news);
  };

  if (loadinNews)
    return (
      <div className={classes.loader}>
        <CircularProgress />
      </div>
    );
  if (newsError) return <h2>error {newsError}</h2>;
  return (
    <div className={classes.container}>
      <ModalLayout
        globalSearch={globalSearch}
        news={newsDetails}
        open={openModal}
        handleClose={() => setOpenModal(false)}
      />
      <Title name={currentCategory.section} />
      <div className={classes.newsBox}>
        {currentNews?.length < 1 ? (
          <p className={classes.message}>No news Found! Please try againe.</p>
        ) : (
          currentNews?.map((news) => (
            <div onClick={() => onOpenDetails(news)} key={news.abstract}>
              <NewsCard globalSearch={globalSearch} news={news} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default News;

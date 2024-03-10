import { useState } from "react";
import Form from "../common/Form/Form";
import News from "../News/News";
import { useStyles } from "./style";
import { apiUrlTypes, getApiUrl } from "../../utils/getApiUrl";
import useFetch from "../../hooks/useFetch";

const GlobalSearch = () => {
  const [searchItem, setSearchItem] = useState("");
  const url = getApiUrl({
    type: apiUrlTypes.global,
    searchItem,
  });
  const { data, isLoading, error } = useFetch(url);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Form setSearchItem={setSearchItem} />
      <News
        globalSearch
        currentCategory={searchItem}
        currentNews={data?.response?.docs}
        loadinNews={isLoading}
        newsError={error}
      />
    </div>
  );
};

export default GlobalSearch;

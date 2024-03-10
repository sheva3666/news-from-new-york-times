import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import useSearch from "../../hooks/useSearch";
import GeneralContext from "../contexts/GeneralContext";
import useTouggleCategories from "../../hooks/useTouggleCategories";
import { getApiUrl, apiUrlTypes } from "../../utils/getApiUrl";

const GeneralContextWrapper = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const { onChangeCategory, currentCategory } = useTouggleCategories();
  const url = getApiUrl({
    type: apiUrlTypes.news,
    category: currentCategory.section,
  });
  const { data, isLoading, error } = useFetch(url);

  const filteredData = useSearch(data, searchInput);

  return (
    <GeneralContext.Provider
      value={{
        state: {
          searchInput,
          currentCategory,
          data: filteredData,
          footerText: data?.copyright,
        },
        onChangeCategory: (category) => onChangeCategory(category),
        setSearchInput: (search) => setSearchInput(search),
        loading: isLoading,
        error,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextWrapper;

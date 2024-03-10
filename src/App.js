import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { ThemeProvider } from "@mui/styles";
import theme from "./theme";

import GlobalSearch from "./components/GlobalSearch/GlobalSearch";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import { FiltersNames } from "./components/constants";

import GeneralContextWrapper from "./components/contextWrappers/GeneralContextWrapper";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <GeneralContextWrapper>
        <Header onSearch={setSearchInput} />
        <Routes>
          {FiltersNames.map((path) => (
            <Route
              path={`/${path === "home" ? "" : path}`}
              key={path}
              element={<HomePage category={path} searchInput={searchInput} />}
            />
          ))}
          <Route path={"/globalSearch"} element={<GlobalSearch />} />
        </Routes>
        <Footer />
      </GeneralContextWrapper>
    </ThemeProvider>
  );
}

export default App;

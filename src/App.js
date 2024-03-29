import { Routes, Route } from "react-router-dom";

import "./App.css";
import { ThemeProvider } from "react-jss";

import theme from "./theme";

import GlobalSearch from "./components/GlobalSearch/GlobalSearch";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import { FiltersNames } from "./components/constants";

import GeneralContextWrapper from "./components/contextWrappers/GeneralContextWrapper";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GeneralContextWrapper>
        <Header />
        <Routes>
          {FiltersNames.map((path) => (
            <Route
              path={`/${path === "home" ? "" : path}`}
              key={path}
              element={<HomePage />}
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

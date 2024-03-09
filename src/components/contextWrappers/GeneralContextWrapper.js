import { useState } from "react";
import GeneralContext from "../contexts/GeneralContext";

const GeneralContextWrapper = ({ children }) => {
  const [folder, setFolder] = useState();

  return (
    <GeneralContext.Provider
      value={{
        state: {},
        setFolder: (newFolder) => setFolder(transformFolder(newFolder)),
        data: {},
        loading: {},
        error: {},
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextWrapper;

// src/context/GlobalDataProvider.js

import data from "../../content/global/index.json"; // Import your JSON data
import GlobalDataContext from "./GlobalDataContext"; // Import the context

export const GlobalDataProvider = ({ children }) => {
  //   const [globalData, setGlobalData] = useState({});

 

  // Log the updated state when it changes

  return (
    <GlobalDataContext.Provider value={data}>
      {children}
    </GlobalDataContext.Provider>
  );
};

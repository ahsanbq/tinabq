// src/context/GlobalDataContext.js

import { createContext, useContext } from "react";

// Create the GlobalData context
const GlobalDataContext = createContext();

// Export the hook to access the context
export const useGlobalData = () => useContext(GlobalDataContext);

export default GlobalDataContext;

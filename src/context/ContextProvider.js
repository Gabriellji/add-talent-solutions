import React, { useState } from "react";

export const MyContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [state, setState] = useState("Popular");
 
  const clickHandler = (e) => setState(e.target.innerText);

  return (
    <MyContext.Provider
      value={{
        state,
        setState,
        clickHandler,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;

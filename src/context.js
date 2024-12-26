import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  query: "HTML",
  nbPages: 0,
  Page: 0,
  hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // const [first, setfirst] = useState(initialState)
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}`);
  });
  //   if (isLoading) {
  //     return (
  //       <>
  //         <h1>Loading.....</h1>
  //       </>
  //     );
  //   }

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useGlobalHook = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobalHook };

import React from "react";
import { useGlobalHook } from "./context";
const Search = () => {
  const name = useGlobalHook();
  return <div>Search{name}</div>;
};

export default Search;

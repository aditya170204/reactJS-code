import React from "react";

import Pagination from "./Pagination";
import Search from "./Search";

import Stories from "./Stories";
import { useGlobalHook } from "./context";

function App() {
  const data = useGlobalHook();
  return (
    <>
      <div>rjndoinrsdojnojrcnsdjcndsjnojdn{data}</div>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;

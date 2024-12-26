import React, { useEffect } from "react";
import { useGlobalHook } from "./context";

const Stories = () => {
  const { hits, nbPages } = useGlobalHook();
  return (
    <>
      <h2>my story</h2>
      {hits.map((curPost) => {
        return <h2>{curPost.title}</h2>;
      })}
    </>
  );
};

export default Stories;

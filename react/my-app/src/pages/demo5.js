import React, { useEffect, useReducer, useState, useContext } from "react";
import useLoadData from "./useLoadData";
import { contextProvider } from "../store";

export default function Reducer() {
  const { state, dispatch } = useContext(contextProvider);
  const [page, setPage] = useState(1);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("state from 4", state);
    setTimeout(() => {
      if (flag) {
        setPage(page + 1);
      }
    }, 2000);
  }, [state, flag, page]);
  return (
    <div
      onClick={() => {
        setFlag(!flag);
        dispatch({ hello: "world45" });
      }}
    >
      DEMO4--{page}
      {JSON.stringify(state)}
    </div>
  );
}

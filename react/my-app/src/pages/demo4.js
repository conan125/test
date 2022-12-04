import React, { useEffect, useReducer, useState, useContext } from "react";
import useLoadData from "./useLoadData";
import { contextProvider } from "../store";

export default function Reducer() {
  const { state, dispatch } = useContext(contextProvider);
  const [page, setPage] = useState(1);
  const [flag, setFlag] = useState(false);

  return (
    <div
      onClick={() => {
        dispatch({ hello: "world45" });
      }}
    >
      DEMO4
      {JSON.stringify(state)}
    </div>
  );
}

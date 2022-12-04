import React, { useEffect, useReducer, useState, useContext } from "react";
import useLoadData from "./useLoadData";
import { contextProvider } from "../store";
import { useLocation, useHistory } from "react-router-dom";

export default function Reducer() {
  const [num, setNum] = useLoadData();
  const [test, setTest] = useState(0);
  const [test2, setTest2] = useReducer((cur, type) => {
    return type;
  }, 0);
  const location = useLocation();

  const { state, dispatch } = useContext(contextProvider);
  useEffect(() => {
    console.log("state from 2", location);
  }, [state]);
  return (
    <div
      onClick={async () => {
        await setTest(7);
        dispatch({ hello: "world" });
        console.log(1, test);
      }}
    >
      DEMO2
      {JSON.stringify(state)}
    </div>
  );
}

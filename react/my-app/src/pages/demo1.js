import React, { useContext, useEffect } from "react";
import useLoadData from "./useLoadData";
import { contextProvider } from "../store";
import useCheck from "./check";
import DEMO2 from "./demo2";
import DEMO4 from "./demo4";
export default function Reducer() {
  const [num, setNum] = useLoadData();

  const [a, seta] = useCheck();
  const { state, dispatch } = useContext(contextProvider);
  useEffect(() => {
    // console.log("state from 1", state);
  }, [state]);
  return (
    <>
      <div
        onClick={() =>
          dispatch({
            type: "changeAge",
            age: 100,
            num: 100,
            a: 107,
          })
        }
      >
        {/* 这是一个函数式组件---{num}--{JSON.stringify(state)} */}
        {/* <p>check:{JSON.stringify(a)}</p> */}
        {/* {JSON.stringify(state)} */}
      </div>
      <div
        onClick={() =>
          dispatch({
            type: "div22",
          })
        }
      >
        DEMO1 CLICK
        <DEMO2></DEMO2>
        <DEMO4></DEMO4>
      </div>
    </>
  );
}

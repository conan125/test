import React, { useEffect, useState } from "react";
import useLoadData from "./useLoadData";
import useLocalReducer from "./useLoadReducer";

export default function useCheck() {
  const [num, setNum] = useLoadData();
  const [result, setResult] = useState();

  const [state, dispatch] = useLocalReducer();

  useEffect(() => {
    console.log("state from checkjs", state);
    setResult(Object.values(state).every((x) => x > 10));
    console.log(Object.values(state));
  }, [state]);
  return [result, setResult];
}

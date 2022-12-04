import React, { useState, useEffect } from "react";

// 如何模拟数据接口请求功能
export default function useLoadData() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log("rrr");
      setNum(2);
    }, 1000);
  }, []);

  return [num, setNum];
}

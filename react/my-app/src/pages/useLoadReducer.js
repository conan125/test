import React, { useReducer } from "react";

const store = {
  age: 10,
  a: 20,
};

// useReducer使用？
// 1.创建 数据仓库store 和 管理者reducer
// 2.通过useReducer(reducer,store)来state和dispatch
const reducer = (state, action) => {
  switch (action.type) {
    case "changeAge":
      return {
        ...state,
        age: action.age,
        a: action.a,
      };

    default:
      return {
        ...state,
      };
  }
};

export default function useLocalReducer() {
  const [state, dispatch] = useReducer(reducer, store);

  return [state, dispatch];
}

import { useEffect, useReducer, useRef } from "react";

// react 组件，感知 hook 内状态的变更
export default function Executor(props) {
  const store = props.hook();
  const mountRef = useRef(false);
  // 状态管理库初始化
  if (!mountRef.current) {
    props.onMount(store);
    mountRef.current = true;
  }
  // store 一旦变更，就会执行 useEffect 回调
  useEffect(() => {
    props.onUpdate(store); // 一旦状态变更，通知依赖的组件更新
  });
  return null;
}

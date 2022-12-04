import Executor from "./root";
export default function createContainer(hook) {
  let store;
  const listeners = new Set(); // 定义回调集合

  const onUpdate = (store) => {
    for (const listener of listeners) {
      listener(store);
    }
  };

  const onMount = (val) => {
    store = val;
  };
  return <Executor onMount={onMount} hook={hook} onUpdate={onUpdate} />;
}

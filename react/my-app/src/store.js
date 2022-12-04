import { createContext, useReducer } from "react";
const contextProvider = createContext();
const reducer = (state, action) => {
  return {
    ...state,
    ...action,
  };
};
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  const { Provider } = contextProvider;
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export { Store, contextProvider };

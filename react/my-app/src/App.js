import "./App.css";
import { routes } from "./router/index";
import { useRoutes } from "react-router-dom";
function App() {
  const elements = useRoutes(routes);
  return elements;
}

export default App;

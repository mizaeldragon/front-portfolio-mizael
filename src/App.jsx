import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";

export function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

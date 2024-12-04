import { BrowserRouter } from "react-router-dom";
import AppRouteS from "./Routes/Route";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouteS />
      </BrowserRouter>
    </>
  );
}

export default App;

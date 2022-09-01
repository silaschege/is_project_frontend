import { BrowserRouter } from "react-router-dom";
import BaseRouter from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <BaseRouter />
  </BrowserRouter>

  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import { PageRouter } from "./router/PageRouter";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <PageRouter />
      </Router>
    </>
  );
}

export default App;

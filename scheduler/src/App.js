import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import TableComponent from "./Components/TableComponent";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={TableComponent}></Route>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

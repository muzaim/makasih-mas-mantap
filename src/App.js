import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import Main from "./Components/Dashboard/Main/Main";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

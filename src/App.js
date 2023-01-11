import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import Dashboard from "./Components/Layouts/Dashboard";
import Home from "./Pages/Dashboard/Home";
import Profile from "./Pages/Dashboard/Profile";
import About from "./Pages/Dashboard/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

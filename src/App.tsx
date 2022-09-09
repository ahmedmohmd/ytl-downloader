import { FC } from "react";
import NavBar from "./components/common/NavBar";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

const App: FC = () => {
  return (
    <div className="min-h-screen min-w-screen">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

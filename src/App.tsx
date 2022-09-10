//* Imports
import { FC } from "react";
import NavBar from "./components/common/NavBar";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Footer from "./components/common/Footer";

//* App Component
const App: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen ">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

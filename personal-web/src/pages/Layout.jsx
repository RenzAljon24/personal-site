import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./Home"; 
import Blog from "./Blog";
import Gear from "./Gear"; 


const Layout = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gear" element={<Gear />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Detail from "../pages/Detail";
import Home from "../pages/Home";
import NowTrending from "../pages/NowTrending";
import Romance from "../pages/Romance";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie/:id" element={<Detail />}></Route>
        <Route path="nowTrending" element={<NowTrending />}></Route>
        <Route path="romance" element={<Romance />}></Route>
      </Routes>
    </Router>
  );
}

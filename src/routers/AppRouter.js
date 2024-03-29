import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Detail from "../pages/Detail";
import Home from "../pages/Home";
import NowTrending from "../pages/NowTrending";
import Romance from "../pages/Romance";
import Thriller from "../pages/Thriller";
import Family from "../pages/Family";
import Favourite from "../pages/Favourite";
import Search from "../pages/Search";

export default function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie/:id" element={<Detail />}></Route>
        <Route path="nowTrending" element={<NowTrending />}></Route>
        <Route path="romance" element={<Romance />}></Route>
        <Route path="thriller" element={<Thriller />}></Route>
        <Route path="family" element={<Family />}></Route>
        <Route path="favourite" element={<Favourite />}></Route>
        <Route path="search" element={<Search />}></Route>
      </Routes>
    </Router>
  );
}

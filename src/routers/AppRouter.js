import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Detail from "../pages/Detail";
import Home from "../pages/Home";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

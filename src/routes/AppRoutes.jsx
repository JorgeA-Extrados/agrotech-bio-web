import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";
import ErrorNotFound from "../views/error/error404";
import Home from "../views/home";
import Promotorplus from "../views/promotorplus";
import BiorhizaEndo from "../views/biorhizaEndo";
import AminGpb from "../views/aminGpb";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/promotor-plus" element={<Promotorplus />} />
      <Route path="/biorhiza-endo" element={<BiorhizaEndo />} />
      <Route path="/amin-gpb" element={<AminGpb />} />
      {/* Ruta 404 */}
      <Route path="*" element={<ErrorNotFound />} />
    </Routes>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;

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
import Nugen from "../components/products/adjuvantes/nugen";
import Trion from "../components/products/adjuvantes/trion";
import CorrectorF from "../components/products/adjuvantes/correctorF";
import Redec from "../components/products/adjuvantes/redec";
import OilcoLB from "../components/products/adjuvantes/oilcoLB";
import Aon from "../components/products/adjuvantes/aon";
import Topclean from "../components/products/adjuvantes/topclean";
import Sg55 from "../components/products/adjuvantes/sg55";
import Promoto from "../components/products/bioinsumos/promoto";
import Biorhiza from "../components/products/bioinsumos/biorhiza";
import Amin from "../components/products/bioinsumos/amin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/promotor-plus" element={<Promotorplus />} />
      <Route path="/biorhiza-endo" element={<BiorhizaEndo />} />
      <Route path="/amin-gpb" element={<AminGpb />} />

      <Route path="/adjuvantes/nuge" element={<Nugen />} />
      <Route path="/adjuvantes/trio" element={<Trion />} />
      <Route path="/adjuvantes/correctorF" element={<CorrectorF />} />
      <Route path="/adjuvantes/redec" element={<Redec />} />
      <Route path="/adjuvantes/oilcoLB" element={<OilcoLB />} />
      <Route path="/adjuvantes/aon" element={<Aon />} />
      <Route path="/adjuvantes/topclean" element={<Topclean />} />
      <Route path="/adjuvantes/sg55" element={<Sg55 />} />

      <Route path="/bioinsumos/promoto" element={<Promoto />} />
      <Route path="/bioinsumos/biorhiza" element={<Biorhiza />} />
      <Route path="/bioinsumos/amin" element={<Amin />} />
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

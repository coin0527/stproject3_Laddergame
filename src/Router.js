import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Omok } from "./pages/omok";
import { Pagenotfound } from "./components/Pagenotfound";
import { Home } from "./pages/Home";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/omok" element={<Omok />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

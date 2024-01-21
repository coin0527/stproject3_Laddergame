import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { routes } from "./routes";
import { App } from "./App";
import { Omok } from "./pages/omok";
import { Pagenotfound } from "./components/Pagenotfound";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<App />} />
        <Route path={routes.omok} element={<Omok />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import HeaderSection from "./components/Header";
import Sobre from "./pages/sobre/Sobre";
import Empreedimentos from "./pages/Empreendimentos/Empreedimentos";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <HeaderSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/empreendimentos" element={<Empreedimentos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

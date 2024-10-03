import { useContext } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HamburgerContext } from "./hooks/HamburgerContext";
import { PaymentModalContext } from "./hooks/PaymentModalContext";

import './assets/styles/compiled-css/App.css'
import './assets/fonts/Montserrat/stylesheet.css'

import Home from './pages/Home'
import Play from "./pages/Play";
import Wiki from "./pages/Wiki";

import HeaderVisible from "./hooks/HeaderVisible";
import Reloads from "./hooks/Reloads";
import Hamburger from "./components/All/Hamburger";
import Payment from "./components/All/Payment";

import wikiBG from './pages/assets/img/wiki-bg.jpg'

const App = () => {
  const { isVisHamburger, setIsVisHamburger } = useContext(HamburgerContext)
  const { isVisPayment, setIsVisPayment } = useContext(PaymentModalContext)

  const WikiBackground = () => {
    const location = useLocation();

    if (location.pathname === '/wiki') {
      return <img src={wikiBG} className='wiki-bg' />;
    }

    return null;
  };
  

  return(
    <>
      <BrowserRouter>
      { isVisHamburger && (
        <Hamburger isVisible={isVisHamburger} setIsVisible={setIsVisHamburger} />
      ) }

      { isVisPayment && (
        <Payment isVisible={isVisPayment} setIsVisible={setIsVisPayment} />
      ) }

        <Reloads />
          <WikiBackground />
          
          <div className="container">
            <HeaderVisible isVisHamburger={isVisHamburger} setIsVisHamburger={setIsVisHamburger} isVisPayment={isVisPayment} setIsVisPayment={setIsVisPayment} />
            <div className="containers-page">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/play" element={<Play />} />
                <Route path="/wiki" element={<Wiki />} />
              </Routes>
            </div>
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
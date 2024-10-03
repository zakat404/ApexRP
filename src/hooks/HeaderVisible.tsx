import { FC } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/All/Header";

interface IHamburger {
  isVisHamburger: boolean
  setIsVisHamburger: (value: boolean) => void
}

interface IPaymentModal {
  isVisPayment: boolean
  setIsVisPayment: (value: boolean) => void
}

const HeaderVisible: FC<IHamburger & IPaymentModal> = ({ isVisHamburger, setIsVisHamburger, isVisPayment, setIsVisPayment }) => {
  const location = useLocation()
  const ignorePages = ['/404', '/login', '/register']

  if (ignorePages.includes(location.pathname)) return null

  return <Header isVisHamburger={isVisHamburger} setIsVisHamburger={setIsVisHamburger} isVisPayment={isVisPayment} setIsVisPayment={setIsVisPayment} />
}

export default HeaderVisible
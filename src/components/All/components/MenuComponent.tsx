import React, { FC, useState } from "react"
import { Server, TopMenuData } from "./pay-models"

import './assets/styles/compiled-css/MenuComponent.css'

import MenuServerDropdown from "./MenuServerDropdown"
import MenuInput from "./MenuInput"
import ButtonConfirmation from "./ButtonConfirmation"

interface ITopMenu {
  servers: Server[]
}

const MenuComponent: FC<ITopMenu> = ({ servers }) => {
  const [topMenuData, setTopMenuData] = useState<TopMenuData>({
    selectedServer: servers[0],
    amount: 0,
    email: '',
  });

  const handleServerChange = (selectedServer: Server) => {
    setTopMenuData({ ...topMenuData, selectedServer });
  };

  const handleInputChange = (name: string, value: string | number) => {
    setTopMenuData({ ...topMenuData, [name]: value });
  };

  const handleRedirect = () => {
    if (
      topMenuData.selectedServer &&
      topMenuData.amount > 0 &&
      topMenuData.email
    ) {
      window.location.href = `https://unitpay.ru/pay/YOUR_UNITPAY_ID?amount=${topMenuData.amount}&email=${topMenuData.email}&server_id=${topMenuData.selectedServer.id}`; 
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  };

  return(
    <>
      <ul className="list-inputs">
        <MenuServerDropdown
          servers={servers}
          selectedServer={topMenuData.selectedServer}
          onServerChange={handleServerChange}
        />
        <MenuInput
          amount={topMenuData.amount}
          email={topMenuData.email}
          onInputChange={handleInputChange}
        />
        <ButtonConfirmation onClick={handleRedirect} />
      </ul>
    </>
  )
}

export default MenuComponent
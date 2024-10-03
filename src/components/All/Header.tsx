import { useState, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './assets/styles/compiled-css/Header.css'

import Logo from './assets/img/apex-logo.svg'
import SVG_discord from './assets/img/discord.svg'
import SVG_replenish from './assets/img/replenish-balance.svg'
import SVG_hamburger from './assets/img/hamburger.svg'

interface IHamburger {
  isVisHamburger: boolean
  setIsVisHamburger: (value: boolean) => void
}

interface IPaymentModal {
  isVisPayment: boolean
  setIsVisPayment: (value: boolean) => void
}

const Header: FC<IHamburger & IPaymentModal> = ({ isVisHamburger, setIsVisHamburger, isVisPayment, setIsVisPayment }) => {
  const [online, setOnline] = useState<number>(765)

  const navigate = useNavigate()

  const scrollToPercentage = (percentage: number) => {
    navigate('/');
    requestAnimationFrame(() => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const targetPosition = scrollHeight * (percentage / 100);
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  };

  return(
    <>
      <div className="header">
        <Link to='/'><img className='logo' src={Logo} /></Link>
        <ul className="menu-list">
          <Link to='/'>
            <div className="line"></div>
            <span className='text'>Главная</span>
          </Link>
          <Link to='/play'>
            <div className="line"></div>
            <span className='text'>Играть</span>
          </Link>
          <Link to='http://forum-apex-rp.ru/'>
            <div className="line"></div>
            <span className='text'>Форум</span>
          </Link>
          <Link to='/wiki'>
            <div className="line"></div>
            <span className='text'>WIKI</span>
          </Link>
          <a onClick={() => scrollToPercentage(47)}>
            <div className="line"></div>
            <span className='text'>О проекте</span>
          </a>
        </ul>
        <div className="right-info">
          <div className="online-server">
            <div className="content-inside">
              <div className="elipse"></div>
              <span className="text-online">{online} / 1500 игроков</span>
            </div>
          </div>
          <div className="header-btns">
            <div id="one-section">
              <Link to='https://discord.gg/apexrpgta5' className="discord" ><img src={SVG_discord} /></Link>
              <div className="replenish-balance" onClick={() => setIsVisPayment(!isVisPayment)}>
                <img src={SVG_replenish} />
                <span className="text">Пополнить счет</span>
              </div>
              <div className="replenish-balance" id='short-replenish' onClick={() => setIsVisPayment(!isVisPayment)}>
                <img src={SVG_replenish} />
              </div>
            </div>
            <img src={SVG_hamburger} className='hamburger-svg' onClick={() => setIsVisHamburger(!isVisHamburger)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
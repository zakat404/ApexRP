import { Link, useNavigate } from 'react-router-dom'
import './assets/styles/compiled-css/Footer.css'

import Logo from './assets/img/apex-logo.svg'
import Visa from './assets/img/footer/visa.svg'
import Mir from './assets/img/footer/mir.svg'
import MasterCard from './assets/img/footer/master-card.svg'

import UserAgreement from './assets/docs/user-agreement.pdf'
import PrivacyPolicy from './assets/docs/privacy-policy.pdf'
import Payments from './assets/docs/payments.pdf'

const Footer = () => {
  const navigate = useNavigate()

  const scrollToPercentage = (percentage: number, link: string) => {
    navigate(link);
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
      <div className="footer">
        <div className="left-block">
          <img className='logo-svg' src={Logo} />
          <div className="info-owner">
            <span>ИП Шупанова Айнагуль Модахмедовна</span>
            <span>ИНН: 721504460321</span>
            <span>ОГРНИП: 324723200024340</span>
          </div>
        </div>
        <div className="center-block">
          <div className="column" id='one'>
            <span className="title">Пользователям</span>
            <div className="link-block">
              <a onClick={() => scrollToPercentage(0, '/play')}>Играть</a>
              <Link to='http://forum-apex-rp.ru/'>Форум</Link>
              <a onClick={() => scrollToPercentage(0, '/wiki')}>WIKI</a>
              <a onClick={() => scrollToPercentage(47, '/')}>О проекте</a>
            </div>
          </div>
          <div className="column" id='two'>
            <span className="title">Важная информация</span>
            <div className="link-block">
              <a href={UserAgreement} download='user-agreement.pdf'>Пользовательское соглашение</a>
              <a href={PrivacyPolicy} download='privacy-policy.pdf'>Условия использования</a>
              <a href={Payments} download='payments.pdf'>Правила оплаты</a>
            </div>
          </div>
          <div className="column" id='three'>
            <span className="title">Контакты</span>
            <div className="link-block">
              <Link to='https://discord.gg/apexrpgta5'>Поддержка в Discord</Link>
              <Link to='https://vk.com/apexrpgta5'>Сообщество ВКонтакте</Link>
              <Link to='mailto:support@apex-rp.ru'>support@apex-rp.ru</Link>
            </div>
          </div>
        </div>
        <div className="right-block">
          <div className="payment">
            <span className="title">Платёжные системы</span>
            <div className="img-block">
              <img id='visa' src={Visa} />
              <img id='mir' src={Mir} />
              <img id='master' src={MasterCard} />
            </div>
          </div>
          <span className="copyright">© Apex Development, 2024</span>
        </div>
      </div>
    </>
  ) 
}

export default Footer
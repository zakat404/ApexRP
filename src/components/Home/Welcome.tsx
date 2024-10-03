import { Link } from 'react-router-dom'
import './assets/styles/compiled-css/Welcome.css'

import oneBG from './assets/img/one-bg.png'
import oneIMG from './assets/img/one-img.svg'
import SVG_next from './assets/img/next.svg'
import elipseBG from '../../assets/img/elipse.svg'
import ApexLogo from './assets/img/Welcome/apex-logo.svg'
import pointsImg from '../../assets/img/points.svg'

const Welcome = () => {
  return(
    <>
      <div className="welcome">
        <img className='elipse-bg' src={elipseBG} />
        <img className='points-img' src={pointsImg} />
        <img className='background-one' src={oneBG} />
        <div className="main-content">
          <img className='main-img' src={oneIMG} />
          <div className="right-content">
            <div className="texts">
              <img className='apex-logo' src={ApexLogo} />
              <div className="texts-b">
                <span className="main-title">Реальная жизнь в <span>GTA 5</span></span>
                <span className="description">На сервере <span>Apex Roleplay</span> ты найдешь тысячи возможностей для создания своей уникальной истории, где ты можешь жить, любить, сражаться и побеждать. Ты можешь создать свой собственный мир, где ты можешь быть создателем своей судьбы и героем своей истории в <span id='gta5'>GTA 5!</span></span>
              </div>
            </div>
            <Link to='/play' className="start-game">
              <span>Начать игру</span>
              <img className='next-svg' src={SVG_next} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
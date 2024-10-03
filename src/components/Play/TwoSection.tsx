import { Link } from "react-router-dom"
import './assets/styles/compiled-css/TwoSection.css'

import BG from './assets/img/TwoSection/bg.png'
import art from './assets/img/TwoSection/art.svg'
import IMG_ragemp from './assets/img/TwoSection/ragemp.jpg'
import SVG_two from './assets/img/TwoSection/two.svg'

import rectangleIMG from '../../assets/img/rectangle.svg'

const TwoSection = () => {
  return(
    <>
      <div className="two-section">
        <img src={BG} className="BG_two" />
        <img src={art} className="art" />
        <img className='rectangle-img' src={rectangleIMG} />
        <div className="blocks">
          <div className="left-block">
            <img src={IMG_ragemp} className="image" />
          </div>
          <div className="right-block">
            <div className="text-block">
              <img src={SVG_two} className="two-svg" />
              <span className="title">Установите <span>RAGE:MP</span></span>
              <span className="description">Чтобы начать игру, вам обязательно надо скачать лаунчер <span>RAGE:MP</span> с официального сайта мультиплеера</span>
            </div>
            <Link to='https://rage.mp/ru' target='_blank'><button className="btn-download">Перейти к скачиванию</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TwoSection
import { useState } from 'react'
import './assets/styles/compiled-css/ThreeSection.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import BG from './assets/img/ThreeSection/bg.png'
import IMG_game from './assets/img/ThreeSection/in_game.png'
import SVG_three from './assets/img/ThreeSection/three.svg'
import polygonIMG from '../../assets/img/polygon.svg'
import elipseIMG from '../../assets/img/elipse.svg'

const ThreeSection = () => {
  const ip = 'apex-rp.com : 22005'

  return(
    <>
      <div className="three-section">
        <img className='polygon-img' src={polygonIMG} />
        <img className='elipse-img' src={elipseIMG} />
        <img src={BG} className='bg-three' />
        <div className="blocks">
          <div className="left-block">
            <div className="text-block">
              <img src={SVG_three} className='three-svg' />
              <span className="title">Подключение к серверу</span>
              <span className="description">После успешной установки <span id='rage'>RAGE:MP</span> вы можете подключиться к серверу <span id="apex">APEX</span> через мастер-лист или по IP</span>
            </div>
            <CopyToClipboard text={ip}>
              <button className="btn-copy">Скопировать IP</button>
            </CopyToClipboard>
          </div>
          <div className="right-block">
            <img src={IMG_game} className='image' />
          </div>
        </div>
      </div>
    </>
  )
}

export default ThreeSection
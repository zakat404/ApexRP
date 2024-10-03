import { Link } from 'react-router-dom'
import './assets/styles/compiled-css/OneSection.css'

import bg from './assets/img/OneSection/bg.png'
import SVG_one from './assets/img/OneSection/one.svg'
import IMG_gta5 from './assets/img/OneSection/gta5.jpg'

import polygonIMG from '../../assets/img/polygon.svg'

const OneSection = () => {
  return(
    <>
      <div className="one-section">
        <img className='polygonIMG' src={polygonIMG} />
        <img src={bg} className='bg-one' />
        <div className="blocks">
          <div className="left-block">
            <div className="text-block">
              <img src={SVG_one} className='one-svg' />
              <span className="title">Лицензия игры <span>GTA 5</span></span>
              <div className="description" style={{ whiteSpace: 'pre-wrap' }}>
                <p>Приобретите лицензионную версию игры <span>GTA 5</span> на проверенных сайтах. Будьте осторожны, можно стать жертвой мошенников!</p>
                <p>Если у вас имеется лицензия игры <span>GTA 5</span>, то переходите к следующему шагу.</p>
              </div>
            </div>
            <Link to='https://ggsel.net/catalog/grand-theft-auto-v-5?utm_source=yandex&utm_medium=cpc&utm_campaign=104202026&utm_content=16277943428&utm_term=---autotargeting&ai=1269460&yclid=15670960472170954751' target='_blank'><button className="buy-btn">Купить игру</button></Link>
          </div>
          <div className="right-block">
            <img src={IMG_gta5} className='image' />
          </div>
        </div>
      </div>
    </>
  )
}

export default OneSection
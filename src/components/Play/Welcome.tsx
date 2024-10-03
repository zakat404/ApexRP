import { Link } from 'react-router-dom'
import './assets/styles/compiled-css/Welcome.css'

import BG from './assets/img/MainSection/bg.png'
import art from './assets/img/MainSection/art.svg'
import SVG_video from './assets/img/MainSection/video.svg'

import elipseIMG from '../../assets/img/elipse.svg'
import pointsIMG from '../../assets/img/points.svg'

const WelcomePlay = () => {
  return(
    <>
      <div className="welcome-play">
        <img className='bg-one' src={BG} /> 
        <img className='elipse-img' src={elipseIMG} />
        <img className='points-img' src={pointsIMG} />
        <div className="content-inside">
          <img className='art' src={art} />
          <div className="right-block">
            <div className="text-block">
              <span className="title">Как начать играть?</span>
              <span className="description">Всего за 3 простых шага вы можете начать творить свою историю в мире <span>APEX.</span> Ниже расписана подробная инструкция</span>
            </div>
            <Link to='https://youtu.be/h8jvneKLAHY?si=xc0DIn8nPMYROQL3&t=15' target='_blank'>
              <button className="view-video">
                <img src={SVG_video} className='video-icon' />
                <span className="btn-text">Смотреть видео</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomePlay
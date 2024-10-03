import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './assets/styles/compiled-css/Social.css'

import elipses from './assets/img/elipces-one.png'
import gta5 from './assets/img/Install/gta5.svg'
import ApexLogo from './assets/img/Install/apex-logo.svg'
import elipseIMG from '../../assets/img/elipse.svg'
import SVG_camera from './assets/img/Install/camera.svg'
import SVG_star from './assets/img/Install/star.svg'

interface ISocials {
  shortName: string,
  link: string
}

const Social = () => {
  const ip = 'apex-rp.com : 22005'

  const socials: ISocials[] = [
    { shortName: 'discord', link: 'https://discord.gg/apexrpgta5' },
    { shortName: 'youtube', link: 'https://www.youtube.com/@APEXRPGTA5' },
    { shortName: 'tiktok', link: 'https://www.tiktok.com/@apex.rp.gta5' },
    { shortName: 'instagram', link: 'https://www.instagram.com/apex.rp.gta5/' },
    { shortName: 'vk', link: 'https://vk.com/apexrpgta5' },
    { shortName: 'telegram', link: 'https://t.me/ApexRP5' },
  ]

  return(
    <>
      <div className="social">
        <img src={elipses} className='elipses-bg' />
        <img src={elipseIMG} className='elipse-img' />
        <div className="content-blocks">
          <div className="install-container">
            <div className="text-block-h">
              <span className="title">Как начать играть?</span>
              <span className="description">Буквально за несколько шагов ты сможешь начать свою историю на APEX ROLEPLAY</span>
            </div>
            <div className="blocks">
              <div className="block">
                <div className="content-inside">
                  <div className="text-block">
                    <span className="title">Приобретите игру</span>
                    <span className="description">Если вы не имеете еще лицензионную версию</span>
                  </div>
                  <img src={gta5} className="logo" />
                  <Link to='https://ggsel.net/catalog/grand-theft-auto-v-5?utm_source=yandex&utm_medium=cpc&utm_campaign=104202026&utm_content=16277943428&utm_term=---autotargeting&ai=1269460&yclid=15670960472170954751' className="btn-block">Купить GTA 5</Link>
                </div>
              </div>
              <div className="block">
                <div className="content-inside">
                  <div className="text-block">
                    <span className="title">Подключитесь к серверу</span>
                    <span className="description">Найдите в поисковой строке наш проект или войдите по IP</span>
                  </div>
                  <img src={ApexLogo} className="logo" id='rage-mp' />
                  <CopyToClipboard text={ip}>
                    <button className="btn-block">Скопировать IP</button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
            <span className="problem">Возникли проблемы? <a className="link" href='https://www.youtube.com/@APEXRPGTA5' >Посмотрите видеоурок</a> <img src={SVG_camera} /></span>
          </div>
          <div className="social-container">
            <div className="text-block-h">
              <span className="title">Будь в курсе событий!</span>
              <span className="description">Присоединяйтесь к нашим социальным сетям, чтобы быть в известности нововведений и новостей.</span>
            </div>
            <ul className="social-blocks">
              { socials.map((social, index) => (
                <Link to={social.link} className="social-b" id={social.shortName} key={index}>
                  <div className="effect"></div>
                  <img src={`assets/Social/${social.shortName}.svg`} className='social-img' />
                </Link>
              )) }
            </ul>
            <span className="media">Являетесь медиа-партнёром? <a className="link" href='https://vk.com/write-226762832?sel=0&to=-226762832'>Свяжитесь с нами</a> <img src={SVG_star} /></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Social
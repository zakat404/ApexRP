import { useState } from 'react'
import './assets/styles/compiled-css/Waiting.css'

import threeBG from './assets/img/three-bg.png'
import driftBG from './assets/img/WaitingBG/drift.svg'
import driftIMG from './assets/img/WaitingIMG/drift.svg'
import pubgBG from './assets/img/WaitingBG/pubg.svg'
import pubgIMG from './assets/img/WaitingIMG/pubg.svg'

import polygonIMG from '../../assets/img/polygon.svg'
import rectangleIMG from '../../assets/img/rectangle.svg'
import elipseIMG from '../../assets/img/elipse.svg'

interface ISystems {
  fullName: string,
  shortName: string
}

const systemsOne: ISystems[] = [
  { fullName: 'Система майнинга', shortName: 'mining' },
  { fullName: 'Система аукциона и рынка', shortName: 'auction' },
  { fullName: 'Тиндер', shortName: 'tinder' },
  { fullName: 'Залоговая система банка', shortName: 'bank' },
]

const systemsTwo: ISystems[] = [
  { fullName: 'Радио в реальном времени', shortName: 'radio' },
  { fullName: 'Изменения интерьеров', shortName: 'interier' },
  { fullName: 'Остров как отдельное государство', shortName: 'island' },
  { fullName: 'Питомцы на охоте', shortName: 'pets' },
]

const Waiting = () => {
  const [activeSystem, setActiveSystem] = useState<number[]>([])
  const [driftBlockAct, setDriftBlockAct] = useState<boolean>(false)
  const [pubgBlockAct, setPubgBlockAct] = useState<boolean>(false)

  const handleHoverSystem = (index: number) => {
    if (activeSystem.includes(index)) {
      setActiveSystem(activeSystem.filter(i => i !== index))
    } else {
      setActiveSystem([...activeSystem, index])
    }
  }

  return(
    <>
      <div className="waiting">
        <img className='polygon-img' src={polygonIMG} />
        <img className='rectangle-img' src={rectangleIMG} />
        <img className='elipse-img' src={elipseIMG} />
        <img src={threeBG} className="bg" />
        <div className="content-inside">
          <div className="section">
            <div className="header-section">
              <span className="title">Что тебя ждёт</span>
              <span className="description">Мы собрали исключительно уникальные игровые модели в одном месте, которые ты не найдёшь ни на одном другом сервере. </span>
            </div>
            <div className="blocks-system">
              <li className={`big-block ${driftBlockAct ? 'active' : '' }`} onMouseEnter={() => setDriftBlockAct(true)} onMouseLeave={() => setDriftBlockAct(false)}>
                <img src={driftBG} className='drift-bg' />
                <img src={driftIMG} className="drift-img" />
                <div className="block-text">
                  <span className="title">Уникальная дрифт система</span>
                  <span className="description">Система начисления очков и эксклюзивные функции дрифта для определённых моделей автомобилей.</span>
                </div>
              </li>
              <ul className="list-blocks">
                { systemsOne.map((system, index) => (
                  <li className={`block ${activeSystem.includes(index) ? 'active' : ''}`} key={index} onMouseEnter={() => handleHoverSystem}>
                    <img src={`assets/WaitingBG/${system.shortName}.svg`} className="bg-system" />
                    <div className="content-inside">j
                      <img src={`assets/WaitingIMG/${system.shortName}.svg`} className="img-system" />
                      <span className="title-system">{system.fullName}</span>
                    </div>
                  </li>
                )) }
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="blocks-system">
              <ul className="list-blocks">
                { systemsTwo.map((system, index) => (
                  <li className={`block ${activeSystem.includes(index) ? 'active' : ''}`} key={index} onMouseEnter={() => handleHoverSystem}>
                    <img src={`assets/WaitingBG/${system.shortName}.svg`} className="bg-system" />
                    <div className="content-inside">j
                      <img src={`assets/WaitingIMG/${system.shortName}.svg`} className="img-system" id={system.shortName} />
                      <span className="title-system">{system.fullName}</span>
                    </div>
                  </li>
                )) }
              </ul>
              <li className={`big-block ${pubgBlockAct ? 'active' : '' }`} onMouseEnter={() => setPubgBlockAct(true)} onMouseLeave={() => setPubgBlockAct(false)}>
                <img src={pubgBG} className='pubg-bg' />
                <img src={pubgIMG} className="pubg-img" />
                <div className="block-text">
                  <span className="title">Королевская битва в стиле PUBG</span>
                  <span className="description">Готовьтесь к захватывающим сражениям! Встречайте обновленный режим 'Королевская битва' в стиле PUBG. Побеждай, выживай, доминируй!</span>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Waiting
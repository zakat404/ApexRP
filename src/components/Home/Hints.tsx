import { Link } from 'react-router-dom'
import './assets/styles/compiled-css/Hints.css'

import fourBG from './assets/img/four-bg.png'
import polygonIMG from '../../assets/img/polygon.svg'

interface IHints {
  question: string,
  answer: string
}

const Hints = () => {
  const hints: IHints[] = [
    {
      question: 'Что такое APEX RP?',
      answer: 'Это уникальный проект на базе GTA V, позволяющий тысячам игроков взаимодействовать друг с другом в реальном времени.'
    },
    {
      question: 'Что такое Role Play?',
      answer: 'Это игровой режим, где участники создают персонажей и сценарии, а затем действуют согласно своим ролям в рамках игровых процессов.'
    },
    {
      question: 'Что такое RAGE MP?',
      answer: 'Это приложение для подключения к серверам. Лаунчер безопасен, умеет исправлять ошибки игры и загружать необходимые файлы.'
    },
    {
      question: 'Чем заняться на сервере?',
      answer: 'Помимо большого выбора профессий и взаимодействия с игроками, у нас доступны регулярные обновления и сезонные ивенты.'
    },
    {
      question: 'Как начать играть на APEX RP?',
      answer: 'Для начала необходимо скачать лицензионную GTA V и установить RAGE MP. Далее выбрать сервер APEX и можно начинать играть.'
    },
    {
      question: 'Где найти правила серверов?',
      answer: 'Раздел с правилами серверов, жалобами на игроков и другими темами можно найти на форуме проекта.'
    },
  ]

  return(
    <>
      <div className="hints">
        <img src={polygonIMG} className='polygon-img' />
        <img className='hints-bg' src={fourBG} />
        <div className="content-inside">
          <span className="title">Ответы на частые вопросы</span>
          <div className="blocks">
            <ul className="blocks-question">
              { hints.map((hint, index) => (
                <li className="hint" key={index}>
                  <div className="cont-insd">
                    <span className="question">{hint.question}</span>
                    <span className="answer">{hint.answer}</span>
                  </div>
                </li>
              )) }
            </ul>
            <ul className="links-help">
              <Link className="block" to='/wiki'>
                <svg className='bulb' width="22" height="33" viewBox="0 0 22 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.71429 24.9545H15.2857M15.2857 23.5455C15.2857 19.3182 21 16.5 21 10.8636C21 5.22727 16.7143 1 11 1C5.28571 1 1 5.22727 1 10.8636C1 16.5 6.71429 19.3182 6.71429 23.5455V27.7727C6.71429 30.5909 8.14286 32 11 32C13.8571 32 15.2857 30.5909 15.2857 27.7727V23.5455Z" stroke="white" stroke-width="2" />
                </svg>
                <span className="text">WIKI</span>
              </Link>
              <Link className="block" to='http://forum-apex-rp.ru/'>
                <svg className='bulb' width="22" height="33" viewBox="0 0 22 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.71429 24.9545H15.2857M15.2857 23.5455C15.2857 19.3182 21 16.5 21 10.8636C21 5.22727 16.7143 1 11 1C5.28571 1 1 5.22727 1 10.8636C1 16.5 6.71429 19.3182 6.71429 23.5455V27.7727C6.71429 30.5909 8.14286 32 11 32C13.8571 32 15.2857 30.5909 15.2857 27.7727V23.5455Z" stroke="white" stroke-width="2" />
                </svg>
                <span className="text">Форум</span>
              </Link>
              <Link className="block" to='http://vk.com/apexrpgta5/'>
                <svg className='bulb' width="22" height="33" viewBox="0 0 22 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.71429 24.9545H15.2857M15.2857 23.5455C15.2857 19.3182 21 16.5 21 10.8636C21 5.22727 16.7143 1 11 1C5.28571 1 1 5.22727 1 10.8636C1 16.5 6.71429 19.3182 6.71429 23.5455V27.7727C6.71429 30.5909 8.14286 32 11 32C13.8571 32 15.2857 30.5909 15.2857 27.7727V23.5455Z" stroke="white" stroke-width="2" />
                </svg>
                <span className="text">VK</span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hints
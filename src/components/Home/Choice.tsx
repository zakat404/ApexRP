import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './assets/styles/compiled-css/Choice.css'

import smokeBG from './assets/img/smoke.png'
import criminalPerson from './assets/img/Choice/crime.png'
import gosPerson from './assets/img/Choice/gos.png'
import elipseIMG from '../../assets/img/elipse.svg'

interface IListItem {
  id: number;
  title: string;
  description: string;
}

const listItems: IListItem[] = [
  {
    id: 1,
    title: 'Современные автомобили и модные наряды',
    description: 'От компактных автомобилей и минивэнов до эксклюзивных суперкаров, от массовых моделей до ограниченных коллекций — у тебя есть шанс создать неповторимый стиль для своего персонажа и выделиться среди других игроков!'
  },
  {
    id: 2,
    title: 'Создай свою историю',
    description: 'Создай свою банду или организацию и займись преступными делами... но у тебя всегда есть шанс встать на сторону закона. В любой момент можно присоединиться к силовым структурам и начать наводить порядок в штате, устраивая громкие задержания гангстеров!'
  },
  {
    id: 3,
    title: 'От эпических погонь до уникальных сюжетов',
    description: 'Займись делом на себя – начни работать в грузоперевозках и зарабатывай с помощью своего транспорта. Или купи собственный бизнес в GTA и получай доход без лишних усилий. Но не забывай контролировать свои активы и внимательно следить за конкурентами.'
  },
  {
    id: 4,
    title: 'Возглавь мафию. Твори беспредел!',
    description: 'Стань главой мафиозного клана и возьми под контроль криминальный мир города. Занимайся незаконными делами, устраняй конкурентов и расширяй своё влияние. Твори беспредел, устанавливая свои правила и держа в страхе всех, кто осмелится тебе противостоять!'
  },
  {
    id: 5,
    title: 'Король дороги!',
    description: 'Угоняй самые крутые машины и превращай их в настоящие шедевры с помощью тюнинга. Создавай уникальные авто, которые будут бросать вызов любому на дороге. Стань королем улиц, показывая мастерство вождения и стиль!'
  },
]

const Choice = () => {
  const [choiceLife, setChoiceLife] = useState<string | null>()
  const [selectedItemId, setSelectedItemId] = useState(1)
  const navigate = useNavigate()

  const handleSelectItem = (id: number) => {
    if (id < 1) {
      setSelectedItemId(listItems.length);
    } else if (id > listItems.length) {
      setSelectedItemId(1);
    } else {
      setSelectedItemId(id);
    }
  };

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
      <div className="choice">
        <img className='elipse-img' src={elipseIMG} />

        <div className="bg-elements">
          <img className={`smoke-bg ${choiceLife !== '' ? 'active' : ''}`} src={smokeBG} />
        </div>

        <div className="persons">
          <img className='criminal' src={criminalPerson} id={`${choiceLife == 'criminal' ? 'act-person-c' : ''}`} />
          <div className="center-content">
          <span className="big-text">
            <span>APEX ROLEPLAY</span> предлагает уникальную возможность погрузиться в виртуальный мир, где ты можешь играть любую роль, следуя правилам, схожим с реальной жизнью. Ты можешь стать политиком, бандитом, бизнесменом, таксистом, рабочим на заводе или полицейским — выбор за тобой! Здесь нет ограничений: создавай свою историю и исследуй разнообразные пути развития в этом захватывающем мире!
          </span>
            <span className="question">Ты готов?</span>

            <div className="img-block-choice">
              {listItems.map((item) => (
                  <div key={item.id}>
                    {item.id === selectedItemId && (
                        <>
                          <div className="img-section">
                            <span className="switch-left" onClick={() => handleSelectItem(selectedItemId - 1)}>❮</span>
                            <div className="img-container">
                              <img className='img-choice' src={`assets/ChoiceList/${item.id}.png`} />
                            </div>
                            <span className="switch-right" onClick={() => handleSelectItem(selectedItemId + 1)}>❯</span>
                          </div>
                          <div className="text-block">
                            <span className="title">{item.title}</span>
                            <span className="description">{item.description}</span>
                          </div>
                        </>
                    )}
                  </div>
              ))}
            </div>

            <div className="btns-choice">
              <Link to='/play' onClick={() => scrollToPercentage(0)} className="criminal" onMouseEnter={() => setChoiceLife('criminal')} onMouseLeave={() => setChoiceLife('')}>Начать играть</Link>
            </div>
          </div>
          <img className='gos' src={gosPerson} id={`${choiceLife == 'criminal' ? 'act-person-g' : ''}`} />
        </div>

      </div>
    </>
  )
}

export default Choice
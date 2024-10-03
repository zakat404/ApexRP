import { useState } from 'react'
import './assets/styles/compiled-css/Roles.css'

import twoBG from './assets/img/two-bg.png'
import elipcesOne from './assets/img/elipces-one.png'
import SVG_add from './assets/img/add.svg'

import polygonIMG from '../../assets/img/polygon.svg'
import rectangleIMG from '../../assets/img/rectangle.svg'
import elipseIMG from '../../assets/img/elipse.svg'

interface IRole {
  fullName: string,
  shortName: string
}

const roles: IRole[] = [
  { fullName: 'Преступником', shortName: 'criminal' },
  { fullName: 'Медиком', shortName: 'medic' },
  { fullName: 'Бизнесменом', shortName: 'business' },
  { fullName: 'Полицейским', shortName: 'police' },
  { fullName: 'Военным', shortName: 'army' },
  { fullName: 'Строителем', shortName: 'builder' },
  { fullName: 'Журналистом', shortName: 'journalist' },
  { fullName: 'Мафиозником', shortName: 'mafia' },
]

const Roles = () => {
  const [activeRole, setActiveRole] = useState<number[]>([])

  const handleClickRole = (index: number) => {
    if (activeRole.includes(index)) {
      setActiveRole(activeRole.filter(i => i !== index))
    } else {
      setActiveRole([...activeRole, index])
    }
  }

  return(
    <>
      <div className="roles">
        <img className='polygon-img' src={polygonIMG} />
        <img className='rectangle-img' src={rectangleIMG} />
        <div className="elipses-block">
          <img className='elipse-img' src={elipseIMG} />
          <img src={elipcesOne} id="one" />
        </div>
        <div className="bg-elements">
          <img src={twoBG} id="two" />
        </div>
        <ul className="list-roles">
          { roles.map((role, index) => (

            <li 
              onClick={() => handleClickRole(index)}
              className={`role ${activeRole.includes(index) ? 'active' : ''}`}
              key={index}>
              <img src={`assets/Roles/${role.shortName}.png`} className="img-role" />
              
              {!activeRole.includes(index) && (
                <img className="add-svg" src={SVG_add} />
              )}

              {activeRole.includes(index) && (
                <div className="titles">
                  <span className="top-title">Стань</span>
                  <span className="bottom-title">{role.fullName}</span>
                </div>
              )}
            </li>

          )) }
        </ul>
      </div>
    </>
  )
}

export default Roles
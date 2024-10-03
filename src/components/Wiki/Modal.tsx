import { FC } from "react"
import './assets/styles/compiled-css/Modal.css'

import SVG_close from './assets/img/close.svg'

interface IItem {
  id?: number,
  shortName?: string,
  fullName: string,
  type: string,
  price: number,
  speed?: number
}

interface IWikiBlock {
  shortName: string,
  fullName: string,
  description: string,
  items: IItem[]
}

interface IModalProps {
  block: IWikiBlock,
  onClose: () => void
}

const ModalHelp: FC<IModalProps> = ({ block, onClose }) => {
  return(
    <>
      <div className='modal-help'>
        <div className="header-section">
          <span className="title">{block.fullName}</span>
          <div className="close" onClick={onClose}>
            <img src={SVG_close} />
          </div>
        </div>
        <ul className="blocks-item">
          { block.shortName === 'vehicles' && (
            block.items.map((item, index) => (
              <li className="item" key={index}>
                <div className="content-inside">
                  <img className="img-item" src={`assets/Wiki/vehicles/${item.shortName}.png`} />
                  <div className="name-block">
                    <span className="descr">Тип: {item.type}</span>
                    <span className="amount">{item.fullName}</span>
                  </div>
                  <div className="block-price">
                    <span className="descr">Стоимость</span>
                    <span className="amount">${item.price}</span>
                  </div>
                  <div className="block-speed">
                    <span className="descr">Макс. скорость</span>
                    <span className="amount">{item.speed} км/ч</span>
                  </div>
                </div>
              </li>
            ))
          ) }

          { block.shortName !== 'vehicles' && (
            block.items.map((item, index) => (
              <li className={`item ${block.shortName}`} key={index} id='noVeh'>
                <div className="content-inside">
                  <img className="img-item" src={`assets/Wiki/${block.shortName}/${item.id}.png`} />
                  <div className="name-block">
                    <span className="descr">Тип: {item.type}</span>
                    <span className="amount">{item.fullName}</span>
                  </div>
                  <div className="block-price">
                    <span className="descr">Стоимость</span>
                    <span className="amount">${item.price}</span>
                  </div>
                </div>
              </li>
            ))
          ) }
        </ul>
      </div>
    </>
  )
}

export default ModalHelp
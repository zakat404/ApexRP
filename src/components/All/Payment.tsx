import { FC } from 'react'
import './assets/styles/compiled-css/Payment.css'

import MenuComponent from './components/MenuComponent'

import paymentBGmain from './assets/img/payment-bg.jpg'
import paymentBG from './assets/img/payment/pay-bg.png'

interface IPaymentModal {
  isVisible: boolean
  setIsVisible: (value: boolean) => void
}

const Payment: FC<IPaymentModal> = ({ isVisible, setIsVisible }) => {
  if (!isVisible) return null

  const servers = [
    { id: 'tokyo', name: 'Сервер TOKYO' },
  ];

  return(
    <>
      <div className={`payment-block ${isVisible ? 'pay-visible' : ''}`}>
        <img src={paymentBGmain} className='payment-bg-main' />
        <span className="closed" onClick={() => setIsVisible(false)}>Закрыть</span>
        <div className="container-b">
          <div className="content-inside">
            <div className="left-block">
              <MenuComponent servers={servers} />
            </div>
            <span className="price-coin">1 RUB = 50 Coins</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment
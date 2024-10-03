import { FC } from 'react';
import './assets/styles/compiled-css/ButtonConfirmation.css'

interface IButtonConfirm {
  onClick: () => void;
}

const ButtonConfirmation: FC<IButtonConfirm> = ({ onClick }) => {
  return(
    <>
      <button className="confirmation" onClick={onClick}>Перейти к оплате</button>
    </>
  )
}

export default ButtonConfirmation
import { FC } from 'react';
import './assets/styles/compiled-css/MenuInput.css'

interface IMenuInput {
  amount: number;
  email: string;
  onInputChange: (name: string, value: string | number) => void;
}

const MenuInput: FC<IMenuInput> = ({ amount, email, onInputChange }) => {
  return(
    <>
      <div className="menu-input">
        <input
          type="number"
          placeholder="Введите сумму (RUB)"
          value={amount}
          onChange={(e) => onInputChange('amount', parseInt(e.target.value))}
        />
        <input
          type="email"
          placeholder="Введите Email аккаунта"
          value={email}
          onChange={(e) => onInputChange('email', e.target.value)}
        />
      </div>
    </>
  )
}

export default MenuInput
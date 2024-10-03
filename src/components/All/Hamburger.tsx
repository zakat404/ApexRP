import { FC } from "react"
import { Link, useNavigate } from "react-router-dom"
import './assets/styles/compiled-css/Hamburger.css'

interface IHamburger {
  isVisible: boolean
  setIsVisible: (value: boolean) => void
}

const Hamburger: FC<IHamburger> = ({ isVisible, setIsVisible }) => {
  const navigate = useNavigate()

  if (!isVisible) return null

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
      <div className={`hamburger ${isVisible ? 'ham-visible' : ''}`}>
        <ul className="list-nav">
          <Link to='/' onClick={() => setIsVisible(false)}>Главная</Link>
          <Link to='/play' onClick={() => setIsVisible(false)}>Играть</Link>
          <Link to='http://forum-apex-rp.ru/index.php' onClick={() => setIsVisible(false)}>Форум</Link>
          <a onClick={() => {setIsVisible(false); scrollToPercentage(28)}}>Помощь</a>
        </ul>
        <span className="closed" onClick={() => setIsVisible(false)}>X</span>
      </div>
    </>
  )
}

export default Hamburger
import './assets/styles/compiled-css/Home.css'

import Welcome from '../components/Home/Welcome'
import Roles from '../components/Home/Roles'
import Choice from '../components/Home/Choice'
import Waiting from '../components/Home/Waiting'
import Social from '../components/Home/Social'
import Hints from '../components/Home/Hints'
import Footer from '../components/Home/Footer'

const Home = () => {
  return(
    <>
      <div className="home">
        <div className="columns">
          <Welcome />
          <Roles />
          <Choice />
          <Waiting />
          <Social />
          <Hints />
          <Footer />
        </div>
      </div>
    </>
  )
}
export default Home
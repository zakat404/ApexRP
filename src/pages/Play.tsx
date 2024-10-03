import './assets/styles/compiled-css/Play.css'

import WelcomePlay from '../components/Play/Welcome'
import OneSection from '../components/Play/OneSection'
import TwoSection from '../components/Play/TwoSection'
import ThreeSection from '../components/Play/ThreeSection'
import Footer from '../components/Home/Footer'

const Play = () => {
  return(
    <>
      <div className="play">
        <div className="columns">
          <WelcomePlay />
          <OneSection />
          <TwoSection />
          <ThreeSection />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Play
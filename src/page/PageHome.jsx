import WelcomeBanner from "../components/WelcomeBanner";
import InfoSection from "../components/InfoSection";
import About from "../components/About";

function PageHome () {
    return (
        <div>
          <WelcomeBanner/>
          <InfoSection/>
          <About/>
        </div>
    )
}

export default PageHome;
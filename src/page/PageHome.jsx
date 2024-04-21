import WelcomeBanner from "../components/WelcomeBanner";
import InfoSection from "../components/InfoSection";
import About from "../components/About";
import ContactForm from "../components/ContactForm";

function PageHome () {
    return (
        <div>
          <WelcomeBanner/>
          <InfoSection/>
          <About/>
          <ContactForm/>
        </div>
    )
}

export default PageHome;
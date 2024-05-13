import WelcomeBanner from "../components/WelcomeBanner";
import InfoSection from "../components/InfoSection";
import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";

function PageHome () {
    return (
        <main>
          <WelcomeBanner/>
          <InfoSection/>
          <AboutSection/>
          <ContactForm/>
        </main>
    )
}

export default PageHome;
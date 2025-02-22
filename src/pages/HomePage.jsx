import Hero from "../components/Hero.jsx";
import CTA from "../components/CTA.jsx";
import OurWork from "../components/OurWork.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Services from "../components/Services.jsx";
import KeyHighlights from "../components/KeyHighlights.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      {/*<KeyHighlights />*/}
      <Services />
      <AboutUs />
      <OurWork />
      <CTA />
    </>
  );
};

export default HomePage;

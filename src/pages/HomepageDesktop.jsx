import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Mottto from "../components/Mottto";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import OurWork from "../components/OurWork";
import Newsletter from "../components/NewsletterSection";
import Footer from "../components/Footer";

const HomepageDesktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start p-10 box-border gap-8 leading-[normal] tracking-[normal]">
      <header className="flex flex-row items-start justify-start py-0 px-[59px] box-border max-w-full lg:pl-[29px] lg:pr-[29px] lg:box-border">
        <Header showLogo={false} />
      </header>
      <HeroSection />
      <Mottto />
      <section className="flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
        <Services />
      </section>
      <section className="flex flex-row items-start justify-start py-0 px-[185px] box-border max-w-full lg:pl-[92px] lg:pr-[92px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[46px] mq750:pr-[46px] mq750:box-border">
        <AboutUs />
      </section>
      <section className="flex flex-row items-start justify-start py-0 px-[190px] box-border max-w-full lg:pl-[95px] lg:pr-[95px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[47px] mq750:pr-[47px] mq750:box-border">
        <OurWork />
      </section>
      <Newsletter />
      <footer className="flex flex-row items-start justify-start py-0 px-[59px] box-border max-w-full lg:pl-[29px] lg:pr-[29px] lg:box-border">
        <Footer
          facebookLink="/facebooklink.svg"
          instagramLink="/instagramlink.svg"
        />
      </footer>
    </div>
  );
};

export default HomepageDesktop;

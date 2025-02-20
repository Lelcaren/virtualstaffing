import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const ContactDesktop = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start pt-[50px] px-[99px] pb-[37px] box-border gap-8 leading-[normal] tracking-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-4 mq750:pl-[49px] mq750:pr-[49px] mq750:box-border">
      <Header logoImageBackgroundImage="url('/logo@3x.png')" showLogo />
      <Content />
      <footer className="flex flex-row items-start justify-start py-0 px-[57px] box-border max-w-full lg:pl-7 lg:pr-7 lg:box-border">
        <Footer
          facebookLink="/facebooklink.svg"
          instagramLink="/instagramlink.svg"
          servicesTextDecoration="unset"
        />
      </footer>
    </div>
  );
};

export default ContactDesktop;

import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const ContactDesktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start p-10 box-border gap-8 leading-[normal] tracking-[normal]">
      <header className="flex flex-row items-start justify-start py-0 px-[59px] box-border max-w-full lg:pl-[29px] lg:pr-[29px] lg:box-border">
        <Header logoImageBackgroundImage="url('/logo@3x.png')" showLogo />
      </header>
      <Content />
      <footer className="flex flex-row items-start justify-start py-0 px-[59px] box-border max-w-full lg:pl-7 lg:pr-7 lg:box-border">
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

import HomePage from "./pages/HomePage.jsx";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { useEffect } from "react";
import ContactPage from "./pages/ContactPage.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title;
    let metaDescription;

    switch (pathname) {
      case "/":
        title = "Homepage - Your Website";
        metaDescription = "Welcome to the homepage of your website.";
        break;
      case "/contact":
        title = "Contact Us - Your Website";
        metaDescription = "Get in touch with us for any inquiries.";
        break;
      default:
        title = "Your Website";
        metaDescription = "Your website description.";
    }

    if (title) {
      document.title = title;
    }

    if (!metaDescription) {
      return;
    }

    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]',
    );

    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    }
  }, [pathname]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

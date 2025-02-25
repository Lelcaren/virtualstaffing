import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./components/AboutUs.jsx"; // Updated import path
import Services from "./components/Services.jsx"; // Updated import path
import ContactPage from "./pages/ContactPage.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // Scroll to top on route change
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  // Update page title and meta description based on route
  useEffect(() => {
    let title;
    let metaDescription;

    switch (pathname) {
      case "/":
        title = "Homepage - Your Website";
        metaDescription = "Welcome to the homepage of your website.";
        break;
      case "/about":
        title = "About Us - Your Website";
        metaDescription = "Learn more about our company and mission.";
        break;
      case "/services":
        title = "Services - Your Website";
        metaDescription = "Explore the services we offer to help your business grow.";
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
        <Route path="/about" element={<AboutUs />} /> {/* Updated path */}
        <Route path="/services" element={<Services />} /> {/* Updated path */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
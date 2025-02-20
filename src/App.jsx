import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomepageDesktop from "./pages/HomepageDesktop";
import ContactDesktop from "./pages/ContactDesktop";

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

  // Update document title and meta description based on route
  useEffect(() => {
    let title = "";
    let metaDescription = "";

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

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomepageDesktop />} />
      <Route path="/contact" element={<ContactDesktop />} />
    </Routes>
  );
}

export default App;

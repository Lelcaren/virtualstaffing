import logo2x from "../../public/logo@3x.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navlinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img src={logo2x} className="h-12" alt="Company Logo" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navlinks.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-500 hover:underline transition underline"
                          : "text-gray-500 hover:underline transition hover:text-gray-500/75"
                      }
                      to={link.href}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {open && (
              <nav
                aria-label="Mobile"
                className="md:hidden z-50 absolute inset-0 h-full pt-6 bg-white"
              >
                <ul className="flex flex-col items-center gap-6 text-sm">
                  {navlinks.map((link) => (
                    <li key={link.label}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 hover:underline transition underline"
                            : "text-gray-500 hover:underline transition hover:text-gray-500/75"
                        }
                        to={link.href}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                  <button onClick={() => setOpen((prevState) => !prevState)}>
                    <X />
                  </button>
                </ul>
              </nav>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen((prevState) => !prevState)}>
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

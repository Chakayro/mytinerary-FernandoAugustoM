import { NavLink } from "react-router-dom";
import CloseIcon from "../assets/close.webp";
import LoginIcon from "../assets/login.png";

function Navbar({ isMenuVisible, setIsMenuVisible }) {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Cities", path: "/cities" },
  ];

  return (
    <nav>
      {!isMenuVisible && (
        <div className="absolute top-5 w-full flex justify-center font-bold font-mono text-black text-4xl">
          <NavLink to="/">
            <h1>MyTinerary</h1>
          </NavLink>
        </div>
      )}
      <nav className={`absolute top-5 right-0 sm:w-9/12 lg:w-8/12 flex justify-between items-center px-6 transition-transform duration-500 ${isMenuVisible ? "translate-x-0" : "translate-x-full hidden"}`}></nav>
      <nav className={`absolute top-5 right-0 sm:w-9/12 lg:w-8/12 flex justify-between items-center px-6 transition-transform duration-500 ${isMenuVisible ? "translate-x-0" : "translate-x-full hidden"}`}>

        <ul className="flex text-black font-extrabold text-xl font-mono items-center md:space-x-24 space-x-12 pr-7 sm:pr-0">
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white/20 p-2 rounded-4xl inline-flex items-center justify-center"
                    : "hover:bg-black/10 p-2 rounded-4xl inline-flex items-center justify-center"
                }
              >
                {route.name}
              </NavLink>
            </li>
          ))}
          <li>
            <img src={LoginIcon} alt="Login" className="h-14" />
          </li>
        </ul>

        <button onClick={() => setIsMenuVisible(false)}>
          <img src={CloseIcon} alt="Close" className="md:h-12 h-8" />
        </button>
      </nav>
    </nav>
  );
}

export default Navbar;
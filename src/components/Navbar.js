import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Header */}
      <div className="container">
        <div className="grid-container">
          <header>
            <div className="logo">
              <img src="icons_assets/Logo.svg" alt="Little Lemon Restro" />
            </div>
          </header>

          {/* Navigation Bar */}
          <nav>
            <ul className="flex-container">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/specials">Menu</Link>
              </li>
              <li>
                <Link to="/BookingPage">Reservation</Link>
              </li>
              <li>
                <Link to="/">Order Online</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

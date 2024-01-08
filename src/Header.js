export default function Header() {
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
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservation</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

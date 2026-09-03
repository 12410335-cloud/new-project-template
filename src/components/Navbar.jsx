const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <div className="logo">{title}</div>

      <div className="menu">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
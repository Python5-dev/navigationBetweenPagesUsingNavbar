import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white">
      <Link to="/" className="px-5">
        Home
      </Link>
      <Link to="/login" className="px-5">
        Login
      </Link>
      <Link to="/Register" className="px-5">
        Register
      </Link>
      <Link to="/dashboard" className="px-5">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;

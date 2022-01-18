import { Link, useLocation } from "react-router-dom";
import FastLancerLogo from "../../assets/FastLancerLogo.svg";
import { useUser } from "../../context/UserContext.jsx";

export default function Header() {
  const { user, setUser } = useUser();
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <div>
      <img src={FastLancerLogo} alt="fast lancer logo" />
      <div>
        {currentPage === "/login" || currentPage === "/signup" ? (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        ) : (
          <>
            <Link to="/clients">Clients</Link>
            <Link to="/projects">Projects</Link>
          </>
        )}
        {user?.id ?? (
          <Link onClick={() => setUser({})} to="/login">
            Log Out
          </Link>
        )}
      </div>
    </div>
  );
}

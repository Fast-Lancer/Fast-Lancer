import Button from "../Button/Button.jsx";
import { Link } from "react-router-dom";

export default function AuthForm({
  isSigningUp,
  handleSubmit,
  toggleIsSigningUp,
}) {
  const AuthText = isSigningUp ? "Sign Up" : "Log In";

  return (
    <form>
      <h1>{AuthText}</h1>
      <label htmlFor="username">User Name</label>
      <input type="text" name="username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <Button handleClick={handleSubmit} buttonText={AuthText} />
      <Link to={isSigningUp ? "/signup" : "/login"}>
        <div className="auth-link" onClick={toggleIsSigningUp}>
          {isSigningUp ? "LogIn Instead" : "SignUp Instead"}
        </div>
      </Link>
    </form>
  );
}

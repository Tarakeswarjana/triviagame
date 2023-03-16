import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <Link
          to={"/question"}
          style={{ textDecoration: "none", color: " #14f7ff" }}
        >
          <p className="neon">Start Trivia Game</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;

//........

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassWord] = useState("");
  const [IsLoggedIn, SetLoggedIn] = useState(false);
  const navigate = useNavigate();

  function EmailSetter(event) {
    SetEmail(event.target.value);
  }

  function PasswordSetter(event) {
    SetPassWord(event.target.value);
  }

  function Submitted(event) {
    event.preventDefault();

    
    if (Email === "login" && Password === "pass") {
      SetLoggedIn(true);  
      navigate("/form");  
    }
  }

  return (
    <>
      <div className="form">
        <form
          style={{ width: "50%", margin: "10vh auto" }}
          onSubmit={Submitted} 
        >
          <h1>Login</h1>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"  
              className="form-control"
              value={Email}
              onChange={EmailSetter}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={Password}
              onChange={PasswordSetter}
            />
          </div>

          {/* Conditional error messages */}
          {(Email.length > 0 && Email !== "login") ? (
            <p>Incorrect Username</p>
          ) : (Password.length > 0 && Password !== "pass") ? (
            <p>Incorrect Password</p>
          ) : (
            ""
          )}

          <button type="submit" className="btn btn-danger">
            Login
          </button>
        </form>
      </div>
      <div className="password"></div>
    </>
  );
}

export default Login;

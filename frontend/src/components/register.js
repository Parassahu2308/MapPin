import CancelIcon from "@mui/icons-material/Cancel";
import RoomIcon from "@mui/icons-material/Room";
import axios from "axios";
import { useRef, useState } from "react";
import "./register.css";

export default function Register({ setShowRegister }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  // const [timer, setTimer] = useState(5);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      await axios.post("http://localhost:5000/api/users/signup", newUser);
      setError(false);
      setSuccess(true);
      // const myTimeout = setTimeout(closeRegister, 5000);
      // function closeRegister() {
      //   clearTimeout(myTimeout);
      alert("Register Successfully! Now Login");
      setShowRegister(false);
      // }
      // const myInterval = setInterval(closeTimer, 1000);
      // function closeTimer() {
      //   setTimer(timer - 1);
      // }
      // setShowRegister(false);
      // setShowLogin(true);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="registerContainer">
      <div className="logo">
        <RoomIcon className="logoIcon" />
        <span>ParasPin</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input autoFocus placeholder="username" ref={usernameRef} />
        <input type="email" placeholder="email" ref={emailRef} />
        <input
          type="password"
          min="6"
          placeholder="password"
          ref={passwordRef}
        />
        <button className="registerBtn" type="submit">
          Register
        </button>
        {success && (
          <span className="success">
            Successfull. You can login now! After 5 Seconds
          </span>
        )}
        {error && <span className="failure">Something went wrong!</span>}
      </form>
      <CancelIcon
        className="registerCancel"
        onClick={() => setShowRegister(false)}
      />
    </div>
  );
}

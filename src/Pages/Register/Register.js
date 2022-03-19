import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };
    return (
      <>
       <div className="divLogo">
                <Link to="/"><img className="loginLogo" src="https://assets.toothsi.in/logo_ba7eedb67a.svg?q=75&w=256" alt=""/>  </Link>
            </div>
      
        <div className="register">
            <span className="registerTitle">register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>email</label>
                <input
                    type="text"
                    className="registerInput"
                    placeholder="enter your email."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="registerInput"
                    placeholder="Enter your password..."
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">
                    Register
                </button>
            </form>
            <Link to='/login' style={{ textDecoration: 'none' }}>
          <p className="loginR">click here to login</p>
        </Link>
            {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
            </div>
            </>
    );
}

export default Register;
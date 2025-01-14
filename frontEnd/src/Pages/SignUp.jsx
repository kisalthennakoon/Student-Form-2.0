import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function signUp(event) {
        if (!username || !password) {
            alert("Please enter both username and password");
            return;
        }

        event.preventDefault();
        try {
            await axios.post("http://localhost:8089/register", {
                username: username,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert("Registration Successful");
            setUsername("");
            setPassword("");

            navigate("/login");
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Registration Failed");
        }
    }

    return (
        <div className="login-container">
            <h1>Sign Up

            </h1>
            <form onSubmit={signUp}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
                <a1>Already have an Account?</a1>
                <a href="/login"> Login</a>
            </form>
            {/* <button onClick={signUp}>Sign Up</button> */}
        </div>
    );
}

export default SignUp;
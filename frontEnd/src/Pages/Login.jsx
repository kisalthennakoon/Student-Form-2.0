import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setId, setToken } from "../redux/state/store/storeSlice";



function Login() {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [token, setToken] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    

    async function signIn(event) {
        event.preventDefault();        

        if (!username || !password) {
            alert("Please enter both username and password");
            return;
        }
        try {
            const response = await axios.post("http://localhost:8089/login", {
                username: username,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const jwtToken = response.data.token; // Adjust this based on your backend response structure
            const userId = response.data.id; // Adjust this based on your backend response structure

            console.log(jwtToken);
            // setToken(jwtToken);
            // localStorage.setItem("token", jwtToken);
            dispatch(setToken(jwtToken));

            
            console.log(userId);
            dispatch(setId(userId));

            // console.log("saved",tokenSaved);
            // console.log("saved",studIdSaved);

            alert("Login Successfully");
            setUsername("");
            setPassword("");

            navigate("/students");
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Login Failed");
        }
    }


    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={signIn}>
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
                <button type="submit">Sign In</button>
                <a1>Don't have an Account?</a1>
                <a href="/"> Sign Up</a>
            </form>
            {/* <button onClick={signUp}>Sign Up</button> */}
        </div>
    );
}

export default Login;
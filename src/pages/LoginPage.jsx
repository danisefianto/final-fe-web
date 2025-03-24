// src/pages/LoginPage.jsx
import loginBg from "../assets/loginregister.png";
import logo from "../assets/logo-loginregister.png";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import MainButton from "../components/MainButton";
import "../styles/LoginPage.css";

function LoginPage() {
    return (
        <div className="login-container">
            <div className="login-left">
                <img src={logo} alt="logo" className="logo" />
                <form className="auth-form">
                    <FormInput
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    <FormInput
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <Link to="/dashboard">
                        <MainButton text="Login" />
                    </Link>
                </form>
                <p className="register-text">
                    Belum punya akun? <Link to="/register">Daftar di sini</Link>
                </p>
            </div>
            <div className="login-right">
                <img src={loginBg} alt="money" />
            </div>
        </div>
    );
}

export default LoginPage;
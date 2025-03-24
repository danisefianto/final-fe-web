// src/pages/RegisterPage.jsx
import registerBg from "../assets/loginregister.png";
import logo from "../assets/logo-loginregister.png";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import MainButton from "../components/MainButton";
import "../styles/RegisterPage.css";

function RegisterPage() {
    return (
        <div className="register-container">
            <div className="register-left">
                <img src={logo} alt="logo" className="logo" />
                <form className="auth-form">
                    <FormInput
                        type="text"
                        placeholder="Nama Lengkap"
                        name="fullName"
                    />
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
                    <FormInput
                        type="text"
                        placeholder="No HP"
                        name="phone"
                    />
                    <Link to="/login">
                        <MainButton text="Daftar" />
                    </Link>
                </form>
                <p className="login-text">
                    Sudah punya akun? <Link to="/login">Login di sini</Link>
                </p>
            </div>
            <div className="register-right">
                <img src={registerBg} alt="register-bg" />
            </div>
        </div>
    );
}

export default RegisterPage;
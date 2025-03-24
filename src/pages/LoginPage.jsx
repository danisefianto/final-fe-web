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
                    <Link to="/">
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


// import MainButton from "../components/MainButton.jsx";
// import Navbar from "../components/Navbar.jsx";
// import TableTransaction from "../components/TableTransaction.jsx";
// import FormInput from "../components/FormInput.jsx";

// function LoginPage() {
//     return (
//         <>
//             <Navbar />
//             <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
//                 {/* Form Preview Section */}
//                 <div style={{ marginTop: "20px", maxWidth: "400px" }}>
//                     <h2>Form Input Preview</h2>
//                     <div className="auth-form">
//                         <FormInput
//                             type="email"
//                             placeholder="Email Address"
//                             name="email"
//                         />
//                         <FormInput
//                             type="password"
//                             placeholder="Password"
//                             name="password"
//                         />
//                         <MainButton
//                             text="Sign In"
//                             onClick={() => alert('Login button clicked!')}
//                         />
//                     </div>
//                 </div>

//                 <div style={{ marginTop: "40px" }}>
//                     <h2>Button Preview</h2>
//                     <MainButton
//                         text="Test Button"
//                         onClick={() => alert('Button clicked!')}
//                     />
//                 </div>

//                 <div style={{ marginTop: "40px" }}>
//                     <h2>Transaction History</h2>
//                     <TableTransaction />
//                 </div>
//             </div>
//         </>
//     );
// }

// src/pages/TopUpPage.jsx
import Navbar from "../components/Navbar";
import "../styles/TopUpPage.css";
import FormInput from "../components/FormInput";
import MainButton from "../components/MainButton";

function TopUpPage() {
    return (
        <div className="topup-wrapper">
            <Navbar />
            <div className="topup-content">
                <div className="topup-inner">
                    <h1 className="topup-title">Top Up</h1>
                    <div className="topup-form-card">
                        {/* Amount Input */}
                        <div className="fund-input-wrapper">
                            <input
                                type="text"
                                defaultValue="IDR 150.000,00"
                                className="fund-value-field"
                                placeholder="Enter amount"
                            />
                            <p className="available-funds">
                                Balance: <span className="fund-amount">IDR 10.000.000</span>
                            </p>
                        </div>

                        {/* From Input */}
                        <div className="select-container">
                            <div className="select-field">
                                <div className="select-label">From</div>
                                <div className="select-value">Credit Card</div>
                                <img
                                    src="/src/assets/dropdown.png"
                                    className="select-arrow"
                                    alt="Open dropdown"
                                />
                            </div>
                        </div>

                        {/* Notes Input */}
                        <div className="note-container">
                            <FormInput
                                type="text"
                                placeholder="Notes:"
                                name="notes"
                                className="note-field"
                            />
                        </div>

                        <div className="action-section">
                            <MainButton text="Top Up" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopUpPage;
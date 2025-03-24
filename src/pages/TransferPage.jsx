// src/pages/TransferPage.jsx
import Navbar from "../components/Navbar";
import "../styles/TransferPage.css";
import FormInput from "../components/FormInput";
import MainButton from "../components/MainButton";

function TransferPage() {
    return (
        <div className="transfer-wrapper">
            <Navbar />
            <div className="transfer-content">
                <div className="transfer-inner">
                    <h1 className="transfer-title">Transfer</h1>
                    <div className="transfer-form-card">
                        {/* To Input */}
                        <div className="select-container">
                            <div className="select-field">
                                <div className="select-label">To</div>
                                <div className="select-value">1302461 (Brian)</div>
                                <img
                                    src="/src/assets/dropdown.png"
                                    className="select-arrow"
                                    alt="Open dropdown"
                                />
                            </div>
                        </div>

                        {/* Amount Input */}
                        <div className="fund-input-wrapper">
                            <input
                                type="text"
                                defaultValue="IDR 99.000.000,00"
                                className="fund-value-field"
                                placeholder="Enter amount"
                            />
                            <p className="available-funds">
                                Balance: <span className="fund-amount">IDR 99.000.000</span>
                            </p>
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
                            <MainButton text="Transfer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransferPage;
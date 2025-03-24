// src/components/InputAmount.jsx
import "../styles/components/InputAmount.css";

function InputAmount({ title, defaultValue, availableBalance }) {
    return (
        <div className="fund-input-wrapper">
            <div className="fund-input-title">{title}</div>
            <input type="text" defaultValue={defaultValue} className="fund-value-field" />
            <p className="available-funds">
                Balance: <span className="fund-amount">{availableBalance}</span>
            </p>
        </div>
    );
}

export default InputAmount;
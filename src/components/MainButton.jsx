// File: src/components/MainButton.jsx
import "../styles/components/MainButton.css";

function MainButton({ text, onClick, className }) {
    return (
        <button
            className={`main-button ${className || ""}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default MainButton;
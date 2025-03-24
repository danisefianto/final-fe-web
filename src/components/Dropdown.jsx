// src/components/Dropdown.jsx
import arrowIcon from "../assets/dropdown.png";
import "../styles/components/Dropdown.css";

function Dropdown({ title, selected }) {
    return (
        <div className="select-container">
            <div className="select-title">{title}</div>
            <div className="select-field">
                {selected}
                <img src={arrowIcon} className="select-arrow" alt="Open dropdown" />
            </div>
        </div>
    );
}

export default Dropdown;
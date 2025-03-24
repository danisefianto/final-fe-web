import "../styles/components/FormInput.css";

function FormInput({
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    required = false,
    className
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            required={required}
            className={`form-input ${className || ""}`}
        />
    );
}

export default FormInput;
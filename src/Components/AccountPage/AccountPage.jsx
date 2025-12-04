import { useState } from "react";
import "./AccountPage.css";

export default function AccountPage() {
    const [user, setUser] = useState({
        username: "Nome Cognome",
        email: "email@example.com",
        password: "password",
        telefono: "123 456 7890",
        indirizzo: "100 Universal City Plaza, Universal City, CA 91608",
    });

    const [editingField, setEditingField] = useState(null);
    const [tempValue, setTempValue] = useState("");
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const placeholders = {
        username: "Inserisci nuovo username",
        email: "Inserisci nuova email",
        password: "Almeno 6 caratteri",
        telefono: "Inserisci nuovo numero",
        indirizzo: "Inserisci nuovo indirizzo",
    };

    const handleEdit = (field) => {
        setEditingField(field);
        setTempValue(user[field]);
        setErrors({});
        setSuccessMessage("");
    };

    const validateField = (field, value) => {
        let error = "";
        if (!value) {
            error = "Questo campo è obbligatorio.";
        } else {
            switch (field) {
                case "email":
                    if (!/^\S+@\S+\.\S+$/.test(value)) error = "Email non valida.";
                    break;
                case "telefono":
                    if (!/^\d{3} \d{4} \d{3}$/.test(value)) error = "Formato telefono valido: 123 4567 890";
                    break;
                case "password":
                    if (value.length < 6) error = "La password deve contenere almeno 6 caratteri.";
                    break;
                default:
                    break;
            }
        }
        setErrors({ ...errors, [field]: error });
        return error === "";
    };

    const handleSave = (field) => {
        const isValid = validateField(field, tempValue);
        if (!isValid) return;

        let newValue = tempValue;

        if (field === "email") {
            newValue = tempValue.toLowerCase();
        }

        if (field === "username") {
            newValue = tempValue.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
        }

        setUser({ ...user, [field]: newValue });
        setEditingField(null);
        setErrors({});
        setSuccessMessage(`Il campo ${field} è stato aggiornato con successo!`);
    };

    const handleCancel = () => {
        setEditingField(null);
        setErrors({});
        setSuccessMessage("");
    };

    const handleChange = (field, value) => {
        if (field === "telefono") {
            let digits = value.replace(/\D/g, "");
            digits = digits.slice(0, 10);

            let formatted = digits;
            if (digits.length > 3 && digits.length <= 7) {
                formatted = digits.slice(0, 3) + " " + digits.slice(3);
            }
            if (digits.length > 7) {
                formatted = digits.slice(0, 3) + " " + digits.slice(3, 7) + " " + digits.slice(7);
            }

            value = formatted;
        }

        setTempValue(value);
        validateField(field, value);
    };

    return (
        <div className="container">
            <h1 id="accountTitle">Account</h1>
            <div className="card">
                {Object.keys(user).map((field) => (
                    <div key={field} className="row">
                        <strong className="label">{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>

                        {editingField === field ? (
                            <>
                                {field === "password" ? (
                                    <div className="password-wrapper">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={tempValue}
                                            placeholder={placeholders[field] || ""}
                                            onChange={(e) => handleChange(field, e.target.value)}
                                            className={`input ${errors[field] ? "input-error" : ""}`}
                                        />
                                        <span
                                            className="eye-icon"
                                            onClick={() => setShowPassword(!showPassword)}
                                            dangerouslySetInnerHTML={{
                                                __html: showPassword
                                                    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <path d="M2 2l20 20" stroke-linecap="round"/>
           <path d="M9.5 9.5A4 4 0 0 1 14.5 14.5" />
           <path d="M17.94 17.94C16.1 19.22 14.09 20 12 20c-5 0-9-4-10-8 
                    0.46-1.8 1.35-3.45 2.56-4.82" />
         </svg>`
                                                    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12Z"/>
           <circle cx="12" cy="12" r="3"/>
         </svg>`,
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <input
                                        type="text"
                                        value={tempValue}
                                        placeholder={placeholders[field] || ""}
                                        onChange={(e) => handleChange(field, e.target.value)}
                                        className={`input ${errors[field] ? "input-error" : ""}`}
                                    />
                                )}

                                <button onClick={() => handleSave(field)} className="button save">
                                    Salva
                                </button>
                                <button onClick={handleCancel} className="button cancel">
                                    Annulla
                                </button>

                                {errors[field] && <div className="error-message">{errors[field]}</div>}
                            </>
                        ) : (
                            <>
                                <span className="value">
                                    {
                                        <span className="value">
                                            {field === "password" ? "*".repeat(user.password.length) : user[field]}
                                        </span>
                                    }
                                </span>
                                <button onClick={() => handleEdit(field)} className="button edit">
                                    Modifica
                                </button>
                            </>
                        )}
                    </div>
                ))}

                {successMessage && <div className="success-message">{successMessage}</div>}
            </div>
        </div>
    );
}

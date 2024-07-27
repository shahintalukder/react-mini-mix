import React from "react";
import "./toast.css";

const Toast = ({ message, id, type, onClose }) => {
    return (
        <>
            <div
                className={`toast
    toast-${type}`}
            >
                <span>{message}</span>
                <button onClick={e => onClose(id)} className="close-toast-btn">
                    x
                </button>
            </div>
        </>
    );
};

export default Toast;

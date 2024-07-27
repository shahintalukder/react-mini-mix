import React, { useState, forwardRef, useImperativeHandle } from "react";
import Toast from "./Toast.jsx";
import "./toast-container.css";

const ToastContainer = forwardRef((props, ref) => {
    const [toast, setToast] = useState([]);

    const addToast = (message, type) => {
        const id = Date.now();
        setToast(prevToast => [...prevToast, { message, id, type }]);

        setTimeout(() => setToast(prev => prev.filter(t => t.id !== id)), 3000);
    };

    const handleClose = id => setToast(prev => prev.filter(t => t.id !== id));

    useImperativeHandle(ref, () => {
        return addToast;
    });

    return (
        <div className="toast-container">
            {toast.map((data, index) => (
                <Toast
                    key={index}
                    message={data.message}
                    type={data.type}
                    id={data.id}
                    onClose={handleClose}
                />
            ))}
        </div>
    );
});

export default ToastContainer;

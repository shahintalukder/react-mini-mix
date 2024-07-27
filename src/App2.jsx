import React, { useRef } from "react";
import Todo from "./todo";
import ToastContainer from "./toast/ToastContainer.jsx";
const App2 = () => {
    const toastRef = useRef();
    
    const showToast = (message,type) => {
      toastRef.current(message,type);
    }
    
    return (
        <>
            <ToastContainer ref={toastRef} />
            <Todo toast={showToast} /> 
        </>
    );
};

export default App2;

import React, { useRef, useState, useEffect } from "react";

export default function GeneratedText({ show, handle, text }) {
    // const textRef = useRef();
    const textArray = text.split("\n");

    const [copyText, setcopyText] = useState("Copy Text");

    /* useEffect(() => {
        const updatedText = text.replaceAll("\n", "<br/>");
        textRef.current.innerHTML = updatedText;
    }, [text]);*/

    function copy() {
        navigator.clipboard.writeText(text);
        setcopyText("Text copied");
        setTimeout(() => setcopyText("Copy Text"), 2000);
    }

   // console.log(textArray);

    return (
        <div
            className={`fixed ${show ? "" : "hidden"} top-0 left-0 h-screen
            w-screen bg-black/20 backdrop-blur
            z-[1000]`}
        >
            <div className="w-full flex justify-end px-2 py-2">
                <span
                    onClick={handle}
                    className="bg-primary rounded-full h-10 w-10 block flex items-center justify-center text-xl text-white"
                >
                    x
                </span>
            </div>
            <div
                className="w-[94%] mx-auto
            bg-white/20 rounded-xl h-4/6 mb-2
            mt-10 py-3 overflow-y-scroll px-2"
            >
                {textArray.length > 0 &&
                    textArray.map((el, index) => (
                        <span className="block" key={index}>
                            {el}
                        </span>
                    ))}
            </div>

            <button
                onClick={copy}
                className="btn btn-primary w-[94%] mx-auto block"
            >
                {copyText}
            </button>
        </div>
    );
}

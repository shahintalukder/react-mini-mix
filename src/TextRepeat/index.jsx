import React, { useState } from "react";
import Header from "./Header";
import GenerateCard from "./GenerateCard.jsx";
import DevInfo from "./DevInfo";
import Loader from "./Loader";
import GeneratedText from "./GeneratedText.jsx";
import Generate from "./libs/Generate.js";
import Modal from "./Modal";

export default function index() {
    const [showDevInfo, setShowDevInfo] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [showGenText, setShowGenText] = useState(false);

    const [text, setText] = useState("hi\n");

    const handleDevInfo = () => {
        setShowDevInfo(prev => prev !== true);
    };
    const handleLoader = () => {
        setShowLoader(prev => prev !== true);
    };

    const handleGenText = () => {
        setText("");
        setShowGenText(prev => prev !== true);
    };
    const handleCallback = val => {
        setText(val);
        handleLoader();
        setShowGenText(prev => prev !== true);
    };

    const handleGenerate = (text, repeat) => {
        Generate(text, repeat, handleCallback);
        handleLoader();
        console.log("called handleGenerate");
    };

    return (
        <>
            <Loader show={showLoader} />

            <DevInfo show={showDevInfo} handle={handleDevInfo} />

            <GeneratedText
                show={showGenText}
                handle={handleGenText}
                text={text}
            />

            <Header handleDevInfo={handleDevInfo} />

            <div className="container px-2">
                <div className="container">
                    <GenerateCard handle={handleGenerate} />
                </div>

                <div className="fixed bottom-2 w-full text-center">
                    Developed by
                    <span className="text-blue-400"> Shahin Talukder </span>
                </div>
            </div>

            <Modal />

        </>
    );
}

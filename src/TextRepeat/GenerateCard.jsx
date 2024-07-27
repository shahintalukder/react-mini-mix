import React, { useState, useEffect } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function GenerateCard({ handle }) {
    const [text, setText] = useState("Hi");
    const [repeat, setRepeat] = useState(10);
    const [repeatLimitHigh, setrepeatLimitHigh] = useState();

    useEffect(() => {
        
    }, [repeat]);

    const handleClose = () => setrepeatLimitHigh(false);
    
    const handleClick = () => {
      if(repeat > 5000){
        setrepeatLimitHigh(true);
      } else {
        handle(text,repeat);
      }
    }
    
    const handleNext = () => {
      setrepeatLimitHigh(false);
      handle(text,repeat);
    }

    return (
        <>
            <div className="w-full px-5 py-5
            bg-white/10 mt-5 space-y-5 p
            b-5 backdrop-blur rounded-xl">
                <Input
                    id="text"
                    onChange={e => setText(e.target.value)}
                    value={text}
                    label="Enter Text"
                    type="text"
                />

                <Input
                    id="number"
                    onChange={e => setRepeat(e.target.value)}
                    value={repeat}
                    label="Repeation"
                    type="number"
                    has_error={repeatLimitHigh}
                />

                <button
                    onClick={handleClick}
                    id="gen"
                    className="btn btn-primary w-full"
                >
                    Generate
                </button>
            </div>

            <Modal
                id="overflow-repeat"
                show={repeatLimitHigh}
                btn_text="Continue"
                handleClose={handleClose}
                title="Attention!"
                handleNext={handleNext}
            >
                <p className="text-red-300">
                    Your are enter repeating time greater then 5000. it will be
                    crashed app.
                    <br />
                    if you want want to go click
                    to continue 
                </p>
            </Modal>
        </>
    );
}

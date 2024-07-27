import React from "react";

export default function Loader({ show }) {
    return (
        <div className={`fixed top-0 left-0 h-screen ${show ? "" : "hidden"} w-screen bg-black/20 z-[1000]`}>
            <div
                className={`fixed left-1/2
            top-1/2 bg-black/20 h-32
            translate-x-[-50%] translate-y-[-50%]
            w-32 z-[1000] backdrop-blur rounded-xl
            flex items-center justify-center`}
            >
                <div className="w-3/4 h-3/4 loading loading-spinner text-primary"></div>
            </div>
        </div>
    );
}

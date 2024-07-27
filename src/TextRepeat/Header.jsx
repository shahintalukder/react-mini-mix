import React from "react";

export default function Header({ handleDevInfo }) {
    return (
        <div className="w-full flex items-center justify-between bg-primary px-2 py-4 font-semibold">
            <h3 className="text-xl text-white">Text Repeater</h3>

            <span onClick={handleDevInfo} className="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    className="bi
                    bi-three-dots-vertical size-7
                    mr-2"
                    viewBox="0 0 16 16"
                >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
            </span>
        </div>
    );
}

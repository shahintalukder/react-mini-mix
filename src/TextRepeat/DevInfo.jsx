import React from "react";
import profile from "./asset/profile.jpeg";

export default function DevInfo({ show, handle }) {
    return (
        <div
            className={`fixed top-0 left-0 h-screen
            ${show ? "" : "hidden"}
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
            <div className="w-[94%] mx-auto bg-white/20 rounded-xl max-h-fit mb-2 mt-10 px-2 py-4">
                <h2 className="text-center font-semibold text-2xl">
                    Developer Info
                </h2>

                <img
                    className="h-36 w-36 mx-auto rounded-full mt-3 object-cover ring"
                    src={profile}
                    alt="dev profile"
                />

                <h2 className="text-xl text-center font-semibold mt-2 text-white">
                    Shahin Talukder
                </h2>
                <span className="text-lg block text-center text-white">
                    I'm a Programer. i love coding
                </span>

                <div className="flex gap-2 justify-center mt-4">
                    <a
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=100085434333878&mibextid=ZbWKwL"
                        className="flex justify-center items-center bg-pink-500 rounded-full block h-12 w-12 text-2xl text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi
                            bi-facebook size-10"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                    </a>
                    <a
                        target="_blank"
                        href="https://t.me/Shahin905"
                        className="flex
                        justify-center
                        items-center bg-cyan-600
                        rounded-full block h-12
                        w-12  text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi
                            bi-telegram size-10"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                        </svg>
                    </a>
                    <a
                        target="_blank"
                        href="https://github.com/shahintalukder"
                        className="flex
                        justify-center
                        items-center bg-g
                        bg-green-700 rounded-full
                        block h-12 w-12 text-2xl
                        text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi
                            bi-github size-10"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </a>
                </div>

                <div className="flex justify-center gap-3 mt-7 px-5">
                    <a
                        href="mailto:stshahin371@gmail.com"
                        className="btn
                    btn-primary w-full"
                    >
                        Send a Mail
                    </a>
                    <button className="hidden btn btn-primary w-1/2">
                        Messages
                    </button>
                </div>
            </div>
            <button
                onClick={handle}
                className="btn btn-secondary w-[94%] mx-auto block"
            >
                Close
            </button>
        </div>
    );
}

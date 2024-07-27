import React from "react";

export default function Modal({
    btn_text,
    handleClose,
    id,
    show,
    title,
    children,
    handleNext
}) {
    return (
        <>
            <input
                type="checkbox"
                id={id}
                className="modal-toggle"
                checked={show}
            />
            <div className="modal" role="dialog">
                <div
                    className="modal-box
                bg-gray-700"
                >
                    <h3
                        className="text-lg
                    font-bold"
                    >
                        {title}
                    </h3>
                    <div className="py-4">{children}</div>
                    <div
                        className="modal-action
                    flex gap-1.5 justify-center
                    !mt-0"
                    >
                        <label onClick={handleClose} className="btn w-1/2">
                            Close!
                        </label>

                        <label
                            onClick={handleNext}
                            className="btn
                            btn-primary w-1/2"
                        >
                            {btn_text}
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}

import React from "react";

export default function Input({ label, has_error, error_msg, id, ...rest }) {
    return (
        <label id={id} className="form-control w-full max-w-xs">
            <div className="label">
                <span
                    className="label-text
                    text-xl"
                >
                    {label}
                </span>
            </div>
            <input
                {...rest}
                className="input
                    input-secondary w-full
                    max-w-xs"
            />
        </label>
    );
}

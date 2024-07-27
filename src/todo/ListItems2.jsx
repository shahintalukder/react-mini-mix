import React from "react";
import "./css/listitems.css";

const ListItems = ({ id,index, text, handle }) => {
    return (
        <div className="listitems">
            <span className="no">{++index}.</span>
            <span className="text">{text}</span>
            <button onClick={e => handle(e,id)}>Delete</button>
        </div>
    );
};

export default ListItems;

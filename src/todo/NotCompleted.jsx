import React from "react";
import ListItems from "./ListItems.jsx";
import './css/notcompleted.css';

export default function NotCompleted({ data, handle }) {
    return (
      <>
      <h3>Not Completed</h3>
        <div className="box">
            {data.length > 0 ? (
                data.map((data,index) => (
                    <ListItems
                        handle={handle}
                        key={data.id}
                        id={data.id}
                        index={index}
                        text={data.text}
                    />
                ))
            ) : (
                <span className="error">Data not available!</span>
            )}
        </div>
        </>
    );
}

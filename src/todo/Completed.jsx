import React from "react";
import ListItems from "./ListItems2.jsx";
import './css/notcompleted.css';

export default function Completed({ data, handle }) {
    return (
      <>
      <h3 style={{marginTop: '20px'}}>Completed</h3>
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

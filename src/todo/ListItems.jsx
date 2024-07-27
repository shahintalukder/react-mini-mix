import React from "react";
import "./css/listitems.css";

const ListItems = ({ id, text,index, handle }) => {
    return (
        <div className="listitems">
        <span className="no">{++index}.</span>
            <span className="text">{text}</span>
            

              <button onClick={e => handle(id)} style={{background:
              'green'}}>Done</button>
           
            
            <input style={{display: 'none'}}
            onChange={e => handle(e,id)} id={id}
            type="checkbox" name={id}/>
        </div>
    );
};

export default ListItems;

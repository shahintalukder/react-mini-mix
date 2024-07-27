import React, { useState } from "react";
import "./css/addtodo.css";

const AddTodo = ({ addTodoFirst, addTodoLast }) => {
    const [text, setText] = useState();

    return (
        <div className="add_todo">
            <input
                onChange={e => setText(e.target.value)}
                placeholder="Name"
                className="add_todo__input"
                type="text"
            />

            <div className="add_todo__btn-con">
                <button
                    onClick={e => addTodoFirst(text)}
                    className="add_todo__btn"
                >
                    Add to first
                </button>
                <button
                    onClick={e => addTodoLast(text)}
                    className="add_todo__btn"
                >
                    Add to Last
                </button>
            </div>
        </div>
    );
};

export default AddTodo;

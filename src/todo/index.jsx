import React, { useState, useEffect } from "react";
import "./css/index.css";
import AddTodo from "./AddTodo.jsx";
import NotCompleted from "./NotCompleted.jsx";
import Completed from "./Completed";

const index = ({ toast }) => {
    const [todo, setTodo] = useState(() => {
        return JSON.parse(localStorage.getItem("todo")) || [];
    });

    const [notCompleted, setNotCompleted] = useState(() =>
        todo.filter(data => {
            return data.completed ? false : true;
        })
    );

    const [completed, setCompleted] = useState(() =>
        todo.filter(data => {
            return data.completed ? true : false;
        })
    );

    const handleAddToLast = text => {
        if (!text) {
            toast(`Name is required!`, "error");
            return;
        }

        setTodo(prev => {
            const recentData = [
                ...prev,
                { id: Date.now(), text, completed: false }
            ];
            //updating not completed value
            setNotCompleted(prev =>
                recentData.filter(data => (data.completed ? false : true))
            );
            localStorage.setItem("todo", JSON.stringify(recentData));
            toast("Todo added success!", "success");
            return recentData;
        });
    };
    const handleAddToFirst = text => {
        if (!text) {
            toast(`Name is required!`, "error");
            return;
        }
        setTodo(prev => {
            const recentData = [
                { id: Date.now(), text, completed: false },
                ...prev
            ];
            //updating not completed value
            setNotCompleted(prev =>
                recentData.filter(data => (data.completed ? false : true))
            );
            localStorage.setItem("todo", JSON.stringify(recentData));
            toast("Todo added success!", "success");
            return recentData;
        });
    };

    const handleCompleted = id => {
        const updatedData = todo.map(data => {
            if (id === data.id) {
                const updated = data;
                updated.completed = true;
                // console.log('hi')
                return updated;
            } else {
                //console.log('hello')
                return data;
            }
        });

        setTodo(prev => {
            const recentData = [...updatedData];
            localStorage.setItem("todo", JSON.stringify(recentData));

            setCompleted(() =>
                recentData.filter(data => {
                    return data.completed ? true : false;
                })
            );

            setNotCompleted(prev =>
                recentData.filter(data => (data.completed ? false : true))
            );

            toast("Task added to completed list!", "info");

            return recentData;
        });
    };

    const handleDelete = (e, id) => {
        const updatedData = completed.filter(data => data.id !== id);

        setTodo(prev => {
            const recentData = [...updatedData];
            localStorage.setItem("todo", JSON.stringify(recentData));

            setCompleted(() =>
                recentData.filter(data => {
                    return data.completed ? true : false;
                })
            );

            toast("Task deleted successful!!", "warning");

            return recentData;
        });
    };

    return (
        <div className="container">
            <AddTodo
                addTodoLast={handleAddToLast}
                addTodoFirst={handleAddToFirst}
            />

            <NotCompleted data={notCompleted} handle={handleCompleted} />

            <Completed data={completed} handle={handleDelete} />
        </div>
    );
};

export default index;

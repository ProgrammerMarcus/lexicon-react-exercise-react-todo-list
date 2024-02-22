import { BaseSyntheticEvent } from "react";
import InterfaceControls from "../interfaces/InterfaceControls";
import "./Todo.css";

interface ToDoProps {
    controls: InterfaceControls;
    id: string;
    name: string;
    date: string;
    task: string;
}

export function ToDo({ controls, id, name, date, task }: ToDoProps) {
    function clickHandler(e: BaseSyntheticEvent) {
        if (e.target.classList.contains("up")) {
            controls.up(id);
        } else if (e.target.classList.contains("down")) {
            controls.down(id);
        } else if (e.target.classList.contains("done")) {
            controls.done(id);
        } else if (e.target.classList.contains("remove")) {
            controls.remove(id);
        }
    }

    return (
        <>
            <div className="todo">
                <div className="text">
                    <span className="name">{name}</span>
                    <span className="task">{task}</span>
                    <span className="date">{date}</span>
                </div>
                <div className="buttons" onClick={(e) => clickHandler(e)}>
                    <button type="button" className="btn up">
                        ↑
                    </button>
                    <button type="button" className="btn down">
                        ↓
                    </button>
                    <button type="button" className="btn done">
                        ✓
                    </button>
                    <button type="button" className="btn remove">
                        ✖
                    </button>
                </div>
            </div>
        </>
    );
}

export default ToDo;

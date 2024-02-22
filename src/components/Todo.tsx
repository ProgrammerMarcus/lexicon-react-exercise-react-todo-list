import Note from "../interfaces/Note";
import "./Todo.css"

export function ToDo({ id, name, date, task }: Note) {
    return (
        <>
            <div className="todo">
                <div className="text">
                    <span className="name">{name}</span>
                    <span className="task">{task}</span>
                    <span className="date">{date}</span>
                </div>
                <div className="buttons">
                    <button type="button" className="btn">
                        Up{id}
                    </button>
                    <button type="button" className="btn">
                        Down{id}
                    </button>
                    <button type="button" className="btn">
                        Done{id}
                    </button>
                    <button type="button" className="btn">
                        Remove{id}
                    </button>
                </div>
            </div>
        </>
    );
}

export default ToDo;

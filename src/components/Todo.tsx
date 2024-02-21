import "./ToDo.css"

interface ToDoProp {
    name: string;
    date: string;
    task: string;
}

export function ToDo({ name, date, task }: ToDoProp) {
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
                        Up
                    </button>
                    <button type="button" className="btn">
                        Down
                    </button>
                    <button type="button" className="btn">
                        Done
                    </button>
                    <button type="button" className="btn">
                        Remove
                    </button>
                </div>
            </div>
        </>
    );
}

export default ToDo;

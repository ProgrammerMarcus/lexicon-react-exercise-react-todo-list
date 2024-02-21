interface ToDoProp {
    name: string;
    date: string;
    task: string;
}

export function ToDo({name, date, task}: ToDoProp) {
    return (
      <>
        <div className="todo">
            <span className="name">{name}</span>
            <span className="date">{date}</span>
            <span className="task">{task}</span>
        </div>
      </>
    );
  }

export default ToDo
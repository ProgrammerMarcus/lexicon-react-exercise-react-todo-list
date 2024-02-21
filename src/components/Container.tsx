import ToDo from "./Todo";
import "./Container.css";

const data = [
    {
        id: 0,
        name: "Firstname Lastname",
        date: "2024-02-13",
        task: "Brush teeth",
    },
    {
        id: 153,
        name: "Firstname Lastname",
        date: "2024-02-13",
        task: "Brush teeth again",
    },
    {
        id: 53541,
        name: "Firstname Lastname",
        date: "2024-02-13",
        task: "Brush teeth again",
    },
    {
        id: 12313,
        name: "Firstname Lastname",
        date: "2024-02-13",
        task: "Brush teeth again",
    },
    {
        id: 12321,
        name: "Firstname Lastname",
        date: "2024-02-13",
        task: "Brush teeth again",
    },
];

export function Container() {
    return (
        <>
            <div className="container">
                {data.map((d) => (
                    <ToDo key={d.id} name={d.name} date={d.date} task={d.task}></ToDo>
                ))}
            </div>
        </>
    );
}

export default Container;

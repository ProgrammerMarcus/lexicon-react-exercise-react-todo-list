import ToDo from "./Todo"

const data = [
    {
        id: 0,
        name: "Firstname Lastname",
        date: "2024-02-13",
        task: "Brush teeth"
    },
    {
        id: 1,
        name: "Firstname Lastname",
        date: "2024-02-13",
        task: "Brush teeth again"
    }
]

export function Container() {
    return (
      <>
        {data.map((d) => <ToDo key={d.id} name={d.name} date={d.date} task={d.task}></ToDo>)}
      </>
    );
  }

export default Container
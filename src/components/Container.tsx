import ToDo from "./Todo";
import "./Container.css";
import Note from "../interfaces/Note"
import NoteListProp from "../interfaces/NoteListProps";

export function Container({noteList}: NoteListProp) {
    return (
        <>
            <div className="container">
                {noteList.map((d: Note) => (
                    <ToDo key={d.id} id={d.id} name={d.name} date={d.date} task={d.task}></ToDo>
                ))}
            </div>
        </>
    );
}

export default Container;

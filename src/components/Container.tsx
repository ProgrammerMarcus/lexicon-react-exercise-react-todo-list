import ToDo from "./Todo";
import "./Container.css";
import Note from "../interfaces/Note"
import InterfaceControls from "../interfaces/InterfaceControls";

interface ContainerProps {
    controls: InterfaceControls;
    noteList: Note[];
}

export function Container({controls, noteList}: ContainerProps) {

    return (
        <>
            <div className="container">
                {noteList.map((d: Note) => (
                    <ToDo controls={controls} key={d.id} id={d.id} name={d.name} date={d.date} task={d.task}></ToDo>
                ))}
            </div>
        </>
    );
}

export default Container;

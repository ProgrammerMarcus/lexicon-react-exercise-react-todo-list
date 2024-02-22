import Container from "./components/Container";
import "./App.css";
import Form from "./components/Form";
import Note from "./interfaces/Note";

const noteList: Note[] = [
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

const add = (note: Note) => {
    noteList.push(note);
};

export function App() {
    return (
        <>
            <Form></Form>
            <Container noteList={noteList}></Container>
        </>
    );
}

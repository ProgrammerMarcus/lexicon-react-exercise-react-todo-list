import Container from "./components/Container";
import "./App.css";
import Form from "./components/Form";
import Note from "./interfaces/Note";
import { useState } from "react";

export function App() {
    const storedNotes: Note[] = [
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

    const [noteList, setNoteList] = useState(storedNotes);

    const add = (note: Note) => {
        setNoteList((oldNotes) => [...oldNotes, note]);
    };

    return (
        <>
            <Form submit={add}></Form>
            <Container noteList={noteList}></Container>
        </>
    );
}

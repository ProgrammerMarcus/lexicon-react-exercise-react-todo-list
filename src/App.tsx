import Container from "./components/Container";
import "./App.css";
import Form from "./components/Form";
import Note from "./interfaces/Note";
import { useState } from "react";
import Controls from "./interfaces/InterfaceControls";

export function App() {
    const storedNotes: Note[] = [
        {
            id: "0",
            name: "Firstname Lastname1",
            date: "2024-02-13",
            task: "Brush teeth",
        },
        {
            id: "153",
            name: "Firstname Lastname2",
            date: "2024-02-13",
            task: "Brush teeth again",
        },
        {
            id: "53541",
            name: "Firstname Lastname3",
            date: "2024-02-13",
            task: "Brush teeth again",
        },
        {
            id: "12313",
            name: "Firstname Lastname4",
            date: "2024-02-13",
            task: "Brush teeth again",
        },
        {
            id: "12321",
            name: "Firstname Lastname5",
            date: "2024-02-13",
            task: "Brush teeth again",
        },
    ];

    const [noteList, setNoteList] = useState(storedNotes);

    const add = (note: Note) => {
        setNoteList((oldNotes) => [...oldNotes, note]);
    };

    const controls: Controls = {
        remove: (id: string) => {
            setNoteList((oldNotes) => oldNotes.filter((n) => n.id !== id));
        },
        up: (id: string) => {
            setNoteList((oldNotes) => {
                const index = oldNotes.findIndex((n) => n.id === id);
                if (index > 0) {
                    const copy = oldNotes[index - 1];
                    oldNotes[index - 1] = oldNotes[index];
                    oldNotes[index] = copy;
                }
                return [...oldNotes];
            });
        },
        down: (id: string) => {
            console.log(id);
        },
        done: (id: string) => {
            console.log(id);
        },
    };

    return (
        <>
            <Form submit={add}></Form>
            <Container controls={controls} noteList={noteList}></Container>
        </>
    );
}

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
            done: false,
        },
        {
            id: "153",
            name: "Firstname Lastname2",
            date: "2024-02-13",
            task: "Brush teeth again",
            done: false,
        },
        {
            id: "53541",
            name: "Firstname Lastname3",
            date: "2024-02-13",
            task: "Brush teeth again",
            done: false,
        },
        {
            id: "12313",
            name: "Firstname Lastname4",
            date: "2024-02-13",
            task: "Brush teeth again",
            done: false,
        },
        {
            id: "12321",
            name: "Firstname Lastname5",
            date: "2024-02-13",
            task: "Brush teeth again",
            done: false,
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
        // code runs twice when in strict mode or something
        // need to make a copy of target to prevent issue
        // content of useState should not be altered directly
        // and copies should be used and returned instead
        // actually, do not alter ANY values in useState,
        // only replace with new one
        up: (id: string) => {
            setNoteList((oldNotes) => {
                const index = oldNotes.findIndex((n) => n.id === id);
                const copyNotes = [...oldNotes];
                if (index > 0) {
                    const copy = copyNotes[index - 1];
                    copyNotes[index - 1] = copyNotes[index];
                    copyNotes[index] = copy;
                }
                return [...copyNotes];
            });
        },
        down: (id: string) => {
            setNoteList((oldNotes) => {
                const index = oldNotes.findIndex((n) => n.id === id);
                const copyNotes = [...oldNotes];
                if (index < copyNotes.length - 1) {
                    const copy = copyNotes[index + 1];
                    copyNotes[index + 1] = copyNotes[index];
                    copyNotes[index] = copy;
                }
                return [...copyNotes];
            });
        },
        done: (id: string) => {
            setNoteList((oldNotes) => {
                const copyNotes = [...oldNotes];
                const index = copyNotes.findIndex((n) => n.id === id);
                if (index > -1) {
                    const copy = { ...copyNotes[index] };
                    copy.done = !copy.done;
                    copyNotes[index] = copy;
                }
                return [...copyNotes];
            });
        },
    };

    return (
        <>
            <Form submit={add}></Form>
            <Container controls={controls} noteList={noteList}></Container>
        </>
    );
}

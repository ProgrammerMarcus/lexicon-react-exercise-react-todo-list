import "./Form.css";
import { FormEvent } from "react";
import SubmitProps from "../interfaces/SubmitProp";
import { useState } from "react";

export function Form({ submit }: SubmitProps) {
    const [name, setName] = useState("");
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const time = new Date;
        submit({
            id: String(time.getTime()) + Math.random(),
            name: name,
            task: task,
            date: date,
        });
    };

    return (
        <>
            <form className="form" onSubmit={submitHandler}>
                <label htmlFor="form-name" className="label">
                    Enter name:
                </label>
                <input
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    type="text"
                    name="form-name"
                    id="form-name"
                    className="input"
                />
                <label htmlFor="form-task" className="label">
                    Enter what to do:
                </label>
                <input
                    onChange={(event) => {
                        setTask(event.target.value);
                    }}
                    type="text"
                    name="form-task"
                    id="form-task"
                    className="input"
                />
                <label htmlFor="form-date" className="label">
                    Enter date:
                </label>
                <input
                    onChange={(event) => {
                        setDate(event.target.value);
                    }}
                    type="text"
                    name="form-date"
                    id="form-date"
                    className="input"
                />
                <button type="submit" className="submit">
                    Add
                </button>
            </form>
        </>
    );
}

export default Form;

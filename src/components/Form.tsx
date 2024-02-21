import "./Form.css"

export function Form() {
    return (
        <>
            <form className="form">
                <label htmlFor="form-name" className="label">Enter name:</label>
                <input type="text" name="form-name" id="form-name" className="input" />
                <label htmlFor="form-task" className="label">Enter what to do:</label>
                <input type="text" name="form-task" id="form-task" className="input" />
                <label htmlFor="form-date" className="label">Enter date:</label>
                <input type="text" name="form-date" id="form-date" className="input" />
                <button type="submit" className="submit">Add</button>
            </form>
        </>
    );
}

export default Form;

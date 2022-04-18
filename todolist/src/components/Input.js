import React from "react";
import Form from 'react-bootstrap/Form'

const Input = () => {

    function addTask (e) {
        e.preventDefault()
        let today = new Date().toISOString().slice(0, 10)
        fetch(`http://localhost:3010/addTask`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "task_name": e.target[0].value,
                    "task_done": false,
                    "created_date": today
                }
            )
        })
            .then(res => res.json())
    }
    return (
        <Form onSubmit={addTask}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="what's next" />
            </Form.Group>
            <button className="btn" type="submit">Add Task</button>
        </Form>
    )
}

export default Input;
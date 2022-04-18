import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import Input from './Input'

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [remove, setRemove] = useState(false);
    const [status, setStatus] = useState()

    useEffect(() => {
        fetch('http://localhost:3010/getTask', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(data => data.json())
            .then((data) => {
                setTasks(data.data)
            })
            .catch(err => console.log(err))
    })

    // function editTask() {
    //     fetch('', {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }

    //     }}

    function deleteTask(id) {
        setRemove(true)
        fetch(`http://localhost:3010/deleteTask/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(() => setRemove(false))
    }

    function updateTask() {
        fetch('', {
            method: 'PUT',
            headers: {

            }
        })
    }

    return (
        <div className='oneTask'>
            <ListGroup variant="flush">
                {tasks.map((data, i) =>
                    <>
                        <ListGroup.Item>
                            <Form>
                                <Form.Check type='radio' />
                            </Form>
                            <span>{data.task_name}</span>
                                <img id='edit' src='./img/edit.svg' />
                                <img id='trash' onClick={() => deleteTask(data._id)} src='./img/trash.svg' />
                        </ListGroup.Item>
                    </>
                )}
            </ListGroup>
            <Input />
        </div>

    )

}

export default Task;
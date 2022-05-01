import React from 'react'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../redux/users/userAction'
import swal from 'sweetalert'

const FormComponent = () => {

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const postData = {
        name,
        gender,
        email,
        age
    }

    // const addNewuser = () => {
    //     axios.post(`${API_URL}user/add-user`, data)
    //         .then(response => console.log(response.data))
    //         .catch(err => console.log(err))
    // }

    const dispatch = useDispatch()

    const addNewUser = (e) => {
        e.preventDefault()
        createUser(dispatch, postData)

        swal("New user has been created!", `Name: ${postData.name}`, "success");

        setName('')
        setGender('')
        setEmail('')
        setAge('')
    }

    return (
        <Form onSubmit={addNewUser}>
            <FormGroup>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            type='text'
                            name="name"
                            placeholder='Name...'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Gender</Label>
                        <Input
                            type='text'
                            name="gender"
                            placeholder='Gender...'
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Email</Label>
                        <Input
                            type='email'
                            name="email"
                            placeholder='Email...'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Age</Label>
                        <Input
                            type='number'
                            name="age"
                            placeholder='Age...'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </FormGroup>
                </Col>
            </FormGroup>
            <Button color="primary" >Add new user!</Button>
        </Form>

    )
}

export default FormComponent
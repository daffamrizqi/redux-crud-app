import React from 'react'
import { Button, Form, FormGroup, Label, Input, Col, Container } from 'reactstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import API_URL from '../constants/URL'
import { useDispatch } from 'react-redux'
import { editUserAsync } from '../redux/users/userAction'
import swal from 'sweetalert'

const EditFormComponent = ({ id }) => {

    const [getUser, setGetUser] = useState()
    const [name, setEditName] = useState(getUser?.name)
    const [gender, setEditGender] = useState(getUser?.gender)
    const [email, setEditEmail] = useState(getUser?.email)
    const [age, setEditAge] = useState(getUser?.age)

    const getUserById = () => {
        axios.get(`${API_URL}user/get-user-byId/${id}`)
            .then(response => setGetUser(response.data))
            .catch(error => console.log(error))
    }

    const editedData = {
        name,
        gender,
        email,
        age
    }

    const editUser = (e) => {
        e.preventDefault()
        editUserAsync(dispatch, editedData, id)

        swal("One User has been updated!", `ID: ${getUser?.id}, Name: ${getUser?.name}`, "success");
        console.log(editedData)

        setEditName(editedData.name)
        setEditGender(editedData.gender)
        setEditEmail(editedData.email)
        setEditAge(editedData.age)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        getUserById()
    }, [])

    return (
        <Form onSubmit={editUser} >
            <FormGroup>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Edit Name</Label>
                        <Input
                            type='text'
                            name="name"
                            placeholder={`${getUser?.name}`}
                            value={name}
                            onChange={(e) => setEditName(e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Edit Gender</Label>
                        <Input
                            type='text'
                            name="gender"
                            placeholder={`${getUser?.gender}`}
                            value={gender}
                            onChange={(e) => setEditGender(e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Edit Email</Label>
                        <Input
                            type='email'
                            name="email"
                            placeholder={`${getUser?.email}`}
                            value={email}
                            onChange={(e) => setEditEmail(e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Edit Age</Label>
                        <Input
                            type='number'
                            name="age"
                            placeholder={`${getUser?.age}`}
                            value={age}
                            onChange={(e) => setEditAge(e.target.value)}
                        />
                    </FormGroup>
                </Col>
            </FormGroup>
            <Button color="primary" >Edit User</Button>
        </Form>
    )
}

export default EditFormComponent
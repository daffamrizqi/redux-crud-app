import React from 'react'
import { Container } from 'reactstrap'
import FormComponent from '../components/FormComponent'


const CreateUser = () => {

    return (
        <Container>
            <h1>Add new user</h1>
            <FormComponent />
        </Container>
    )
}

export default CreateUser
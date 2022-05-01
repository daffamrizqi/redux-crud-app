import React from 'react'
import { useParams } from 'react-router-dom'
import EditFormComponent from '../components/EditFormComponent'
import { Container } from 'reactstrap'

const EditUser = () => {

    const { id } = useParams()

    return (
        <Container>
            <h1>Edit User</h1>
            <EditFormComponent id={id} />
        </Container>
    )
}

export default EditUser
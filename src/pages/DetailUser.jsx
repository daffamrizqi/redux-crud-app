import React from 'react'
import { Container } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchUserDetailAsync } from '../redux/users/userAction'
import DetailUserComponent from '../components/DetailUserComponent'


const DetailUser = () => {

    const { id } = useParams()

    // data user detail dengan ID
    const userDetail = useSelector(state => state.users.userDetail)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchUserDetailAsync(dispatch, id)
    }, [])

    console.log(userDetail)
    console.log('render')
    return (
        <Container>
            <h2>Detail User Page</h2>
            <hr />
            <DetailUserComponent user={userDetail} />
        </Container>
    )
}

export default DetailUser
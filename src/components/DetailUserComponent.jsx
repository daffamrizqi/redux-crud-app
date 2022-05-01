import React from 'react'
import { Table } from 'reactstrap'


const Detailuser = ({ user }) => {
    return (
        <Table hover>
            <tbody>
                <tr>
                    <td width="50px" scope="row">1.</td>
                    <td width="150px" ><b>Name</b></td>
                    <td width="10px" ><b>:</b></td>
                    <td >{user.name}</td>
                </tr>
                <tr>
                    <td width="50px" scope="row">2.</td>
                    <td width="150px" ><b>Gender</b></td>
                    <td width="10px" ><b>:</b></td>
                    <td >{user.gender}</td>
                </tr>
                <tr>
                    <td width="50px" scope="row">3.</td>
                    <td width="150px" ><b>Email</b></td>
                    <td width="10px" ><b>:</b></td>
                    <td >{user.email}</td>
                </tr>
                <tr>
                    <td width="50px" scope="row">4.</td>
                    <td width="150px" ><b>Age</b></td>
                    <td width="10px" ><b>:</b></td>
                    <td >{user.age}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Detailuser
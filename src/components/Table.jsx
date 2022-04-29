import React, { useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsersAsync } from '../redux/users/userAction'
import { Link } from 'react-router-dom'


const { SearchBar } = Search;

const columns = [{
    dataField: 'id',
    text: 'User ID',
    sort: 'true',
    sortCaret: (order, column) => {
        if (!order) return (<span>&nbsp;&nbsp;<ion-icon size="small" name="arrow-up-circle-outline"></ion-icon><ion-icon size="small" name="arrow-down-circle-outline"></ion-icon></span>);
        else if (order === 'asc') return (<span>&nbsp;&nbsp;<ion-icon size="small" name="arrow-down-circle-outline"></ion-icon><font color="blue"><ion-icon size="small" name="arrow-up-circle-outline"></ion-icon></font></span>);
        else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="blue"><ion-icon size="small" name="arrow-down-circle-outline"></ion-icon></font><ion-icon size="small" name="arrow-up-circle-outline"></ion-icon></span>);
        return null;
    }
}, {
    dataField: 'name',
    text: 'Name',
    sort: 'true',
    sortCaret: (order, column) => {
        if (!order) return (<span>&nbsp;&nbsp;<ion-icon size="small" name="arrow-up-circle-outline"></ion-icon><ion-icon size="small" name="arrow-down-circle-outline"></ion-icon></span>);
        else if (order === 'asc') return (<span>&nbsp;&nbsp;<ion-icon size="small" name="arrow-down-circle-outline"></ion-icon><font color="blue"><ion-icon size="small" name="arrow-up-circle-outline"></ion-icon></font></span>);
        else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="blue"><ion-icon size="small" name="arrow-down-circle-outline"></ion-icon></font><ion-icon size="small" name="arrow-up-circle-outline"></ion-icon></span>);
        return null;
    }
}, {
    dataField: 'gender',
    text: 'Gender',
},
{
    dataField: 'email',
    text: "Email",
    sort: 'true',
    sortCaret: (order, column) => {
        if (!order) return (<span>&nbsp;&nbsp;<ion-icon size="small" name="arrow-up-circle-outline"></ion-icon><ion-icon size="small" name="arrow-down-circle-outline"></ion-icon></span>);
        else if (order === 'asc') return (<span>&nbsp;&nbsp;<ion-icon size="small" name="arrow-down-circle-outline"></ion-icon><font color="blue"><ion-icon size="small" name="arrow-up-circle-outline"></ion-icon></font></span>);
        else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="blue"><ion-icon size="small" name="arrow-down-circle-outline"></ion-icon></font><ion-icon size="small" name="arrow-up-circle-outline"></ion-icon></span>);
        return null;
    }
},
{
    dataField: 'age',
    text: "Age",
    sort: 'true',
    sortCaret: (order, column) => {
        if (!order) return (<span>&nbsp;&nbsp;<ion-icon size="small" name="arrow-up-circle-outline"></ion-icon><ion-icon size="small" name="arrow-down-circle-outline"></ion-icon></span>);
        else if (order === 'asc') return (<span>&nbsp;&nbsp;<ion-icon size="small" name="arrow-down-circle-outline"></ion-icon><font color="blue"><ion-icon size="small" name="arrow-up-circle-outline"></ion-icon></font></span>);
        else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="blue"><ion-icon size="small" name="arrow-down-circle-outline"></ion-icon></font><ion-icon size="small" name="arrow-up-circle-outline"></ion-icon></span>);
        return null;
    }
},
{
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
        return (
            <div>
                <Link to={"/user-edit/" + row.id} >
                    <Button color='info' size='sm' style={{ margin: "10px" }}>
                        <ion-icon name="create-outline"></ion-icon>
                    </Button>
                </Link>
                <Link to={"/user-detail/" + row.id} >
                    <Button color='secondary' size='sm' >
                        <ion-icon name="bulb-outline"></ion-icon>
                    </Button>
                </Link>
                <Button color='danger' size='sm' style={{ margin: "10px" }} >
                    <ion-icon name="trash-outline"></ion-icon>
                </Button>
            </div>
        )
    }
}];

const Table = () => {

    const usersList = useSelector(state => state.users.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersAsync())
        console.log(usersList)
    }, [])

    return (
        < Container className='main-container' >
            {usersList ? <ToolkitProvider
                keyField="id"
                data={usersList}
                columns={columns}
                search
                striped
                hover
                condensed
            >
                {
                    props => (
                        <div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', width: '100%' }} >
                                <div>
                                    <Link to="/create-user" >
                                        <Button color='primary' size='sm' style={{ margin: "10px" }} >
                                            <ion-icon name="person-add-outline"></ion-icon>
                                        </Button>
                                    </Link>
                                </div>
                                <div>
                                    <SearchBar {...props.searchProps} placeholder="search..." />
                                </div>
                            </div>
                            <hr />
                            <BootstrapTable
                                pagination={paginationFactory()}
                                {...props.baseProps}
                            />
                        </div>
                    )
                }
            </ToolkitProvider> : null}
        </ Container>
    )
}

export default Table
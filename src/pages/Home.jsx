import React from 'react'
import Table from '../components/Table'
import { connect } from 'react-redux'


const Home = () => {

    return (
        <div>
            <Table />
        </div>
    )
}

export default connect()(Home)
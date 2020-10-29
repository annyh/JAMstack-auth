import React from 'react'
import { Link } from 'gatsby'
import './layout.css'

const Profile = () => {
    return (
        <div className='dashboard-header'>
            <nav>
                <Link to='/dashboard/secret'
                    activeClassName='active'
                >Secret Stuff</Link>

                <Link to='/dashboard/base'
                    activeClassName='active'
                >See the base</Link>
            </nav>
            <span>TOOD: show login status</span>
        </div>
    )
}

export default Profile
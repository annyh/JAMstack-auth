import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Profile from '../components/profile'
import RouteBase from '../components/route-base'
import RouteSecret from '../components/route-secret'
import RouteLogin from '../components/route-login'

const Dashboard = ({ location }) => {
    // on component mount
    useEffect(() => {
        if (location.pathname.match(/^\dashboard\/?$/)) {
            navigate('dashboard/login', { replace: true })
        }
    }, [location.pathname])
    return (
        <Layout>
            <Profile></Profile>
            <Router>
                <RouteBase path='/dashboard/base' />
                <RouteSecret path='/dashboard/secret' />
                <RouteLogin path='/dashboard/login' />
            </Router>
            <p>TODO: create a Dashboard</p>
        </Layout>
    )
}

export default Dashboard
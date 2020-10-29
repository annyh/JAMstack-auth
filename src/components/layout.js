import React from 'react'
import { Link } from 'gatsby'
import './layout.css'
import { IdentityContextProvider } from 'react-netlify-identity-widget'

const Layout = ({ children }) => (
    <IdentityContextProvider url='https://jamstack-intro-auth-anny.netlify.com'>
        <header>
            <Link to="/">JAMstack app</Link>
            <main>{children}</main>
        </header>
    </IdentityContextProvider>
)

export default Layout
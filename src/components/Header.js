import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <header>
                <h1>Color App</h1>
                <nav><Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link></nav>
            </header>
        )
    }
}
const linkStyle = {
    textDecoration: "none",
    color: "#fff"
}

export default Header

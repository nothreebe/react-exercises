
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {

    render() {
        return (
            <nav className="nt-nav" style={{ maxWidth: 'none' }}>
                <div className="nt-navbrand">
                    <img src="https://nothree-ui.appspot.com/images/nav-brand.png" alt="" />
                </div>
                <ul style={{ listStyle: "none" }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/images/">Image</Link>
                    </li>
                </ul>
            </nav>
        )
    }

}
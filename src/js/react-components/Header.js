import React, { Component } from "react";
// import PropTypes from "prop-types";
import NavBar from "./NavBar";

class Header extends Component {
    /* static propTypes = {
        logoPath: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired
    } */

    render() {
        return (
            <header>
                <div className="my-logo-box">
                </div>
                <NavBar />
            </header>
        )
    }
}

export default Header;

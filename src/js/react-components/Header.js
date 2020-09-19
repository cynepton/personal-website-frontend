import React, { Component } from "react";
// import PropTypes from "prop-types";
import NavBar from "./NavBar";

class Header extends Component {
    static propTypes = {

    }

    state = {

    }

    render() {
        return (
            <header>
                <div>
                    <img src={this.props.logoPath} alt={this.props.altText} />
                </div>
                <NavBar />
            </header>
        )
    }
}

export default Header;
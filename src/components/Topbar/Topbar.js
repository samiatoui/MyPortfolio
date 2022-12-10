import "./topbar.css";
import React, { Component } from "react";
import MenuItems from "./MenuItems";

class Topbar extends Component {
    render() {
        return (
            <nav className="Navbar">
                <div className="title">
                    <h1>SAMI ATOUI.</h1>
                </div>
                <div className="nav-btn">
                    <ul>
                        <MenuItems />
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Topbar
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
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li><a className="item.cName" href={item.url}>{item.title}</a></li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Topbar
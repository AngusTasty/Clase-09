import React, { Component } from "react";
import logo from "../../assets/img/BC_Logo_.png";

export default class Navbar extends Component {

    render() {
        return(
            <>
                <img src={ logo } width={ 40 } alt="logo"></img>
                
            </>
        );
    }
}
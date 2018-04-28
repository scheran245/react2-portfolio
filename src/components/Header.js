import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Header = () =>(
    <header>
        <h1>Hurrah!!!</h1>

        <NavLink to={"/"} activeClassName="is-active" exact={true}> Home </NavLink>
        <NavLink to={"/Portfolio"} activeClassName="is-active" exact={true}> Portfolio </NavLink>
        <NavLink to={"/Contact"} activeClassName="is-active" exact={true}> Contact </NavLink>
    </header>
)

export default Header;
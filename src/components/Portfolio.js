import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Portfolio=()=>(
    <div>
        <h2>here i attached some portfolio models here..</h2>
        <ul>
            <li><Link to={'/Portfolio/1'}>one</Link></li>
            <li><Link to={'/Portfolio/2'}>two</Link></li>
            <li><Link to={'/Portfolio/3'}>three</Link></li>
        </ul>
    </div>
)

export default Portfolio;
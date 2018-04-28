import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const PortfolioItem=(props)=>(
    <div>
        <h2>example {props.match.params.id}</h2>

        <br /><br /><br /><br /><br />
        <Link to={'/Portfolio'}>Go Back</Link>
    </div>
)

export default PortfolioItem;
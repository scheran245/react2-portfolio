import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Header from './../components/Header';
import notFoundPage from './../components/notFoundPage';
import Home from './../components/Home';
import Contact from './../components/Contact';
import Portfolio from './../components/Portfolio';
import PortfolioItem from './../components/PortfolioItem';

const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path={'/'} component={Home} exact={true}/>
                <Route path={'/Portfolio'} component={Portfolio} exact={true}/>
                <Route path={'/Portfolio/:id'} component={PortfolioItem} exact={true}/>
                <Route path={'/Contact'} component={Contact} exact={true}/>
                <Route component={notFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
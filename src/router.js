import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Season from './Components/Season/Season';
import Support from './Components/Support/Support';
import About from './Components/About/About';
import Nav from './Components/Nav/Nav';

export default (
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/season' component={Season}/>      
        <Route path='/support' component={Support}/>                                                        
        <Route path='/about' component={About}/>                                             
    </Switch>
);
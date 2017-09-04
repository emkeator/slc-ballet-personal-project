import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Season from './Components/Season/Season';
import Theatre from './Components/Theatre/Theatre';
import Support from './Components/Support/Support';
import About from './Components/About/About';

export default (
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/season' exact component={Season}/>
        <Route path='/theatre' exact component={Theatre}/>        
        <Route path='/support' exact component={Support}/>                                                        
        <Route path='/about' exact component={About}/>                                      
    </Switch>
);
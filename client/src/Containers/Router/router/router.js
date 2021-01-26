import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import grab from '../../pages/Home/wely';
import market from '../../pages/serius';
import toko from '../../pages/Home/toko';
import Shops2 from '../../pages/shops2';
import Register from '../../pages/register';
import paySuccess from '../../pages/paySuccess';

class Rout extends Component{
    render(){
        return(
          <Router>
            <div>
          <Route path="/" exact component={Register}/> 
          <Route path="/shops" component={market}/> 
          <Route path="/toko" component={toko}/> 
          <Route path='/sop' component={Shops2}/>
          <Route path='/register' component={Register}/>
          <Route path='/paySuccess' component={paySuccess}/>
            </div>
          </Router>
        );
    }
}

export default Rout;
import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Signin from './Signin'
import Signup from './Signup'

render( <Router>
            <div>
                <Route exact path="/" component={Signin}/>
                <Route path="/Signup" component={Signup}/>
            </div>
        </Router>,
        document.getElementById('root'))
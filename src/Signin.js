import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

class Signin extends Component {
    constructor(props) {
        super(props)
        this.setState({
            username: '',
            password: ''
        })
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSignInClick = this.handleSignInClick.bind(this)
    }
    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }
    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }
    handleSignInClick() {
        console.log('Inside SignIn')
        axios.post('/signin', {
            username: this.state.username,
            password: this.state.password
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                <form>
                    <h2>Login</h2>
                    <hr />
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="inputUsername">Username</label>
                        <input type="text" id="inputUsername" placeholder="Username" className="form-control" onChange={ this.handleUsernameChange }/>
                    </div>
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="inputPassword">Password</label>
                        <input type="password" id="inputPassword" placeholder="Password" className="form-control" onChange={ this.handlePasswordChange }/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handleSignInClick}>Login</button>
                </form>
                <Link to="/signup">{'Sign Up'}</Link>
            </div>
        )
    }
}

export default Signin
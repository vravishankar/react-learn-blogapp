import React, { Component } from 'react'

class Signup extends Component {
    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor="inputUsername">Username</label>
                    <input type="text" id="inputUsername"/>
                    <label>Email</label>
                    <input type="email" />
                    <label>Password</label>
                    <input type="password"/>
                    <label> Re Enter Password</label>
                    <button>Register</button>
                </form>
            </div>
        )
    }
}

export default Signup
import React from 'react'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.login} >
            <input type="text" placeholder="Username" onChange={props.u_name} required/>
            <input type="password" placeholder="Password" onChange={props.u_password} required/>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm
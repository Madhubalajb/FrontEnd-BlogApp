import React from 'react'

const SignUpForm = (props) => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={props.addUser}>
                <input type="text" placeholder="Name" onChange={props.name} />
                <input type="text" placeholder="Username" onChange={props.u_name} />
                <input type="password" placeholder="Set Password" onChange={props.u_password} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm
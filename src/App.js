import React, {useState, useEffect} from 'react'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import loginService from './services/login'
import blogService from './services/blog'

const App = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username, password
            })
            setUser(user)
            setUsername('')
            setPassword('')
        }
        catch (exception){
            console.log(exception)
        }
    }

    const handleBlog = (event) => {
        event.preventDefault()
        try {
            const blog = await blogService.postData({
                title, author, url
            })
            setTitle('')
            setAuthor('')
            setUrl('')
        }
        catch (exception) {
            console.log(exception)
        }
    }

    const handleUsername = (event) => setUsername(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value)
    const handleTitle = (event) => setTitle(event.target.value)
    const handleAuthor = (event) => setAuthor(event.target.value)
    const handleUrl = (event)=> setUrl(event.target.value)

    return (
        <center>
            <h1>Login</h1>
            <LoginForm login={handleLogin} u_name={handleUsername} u_password={handlePassword} />
            <BlogForm blog={handleBlog} title={handleTitle} author={handleAuthor} url={handleUrl} />
        </center>
    )
}

export default App
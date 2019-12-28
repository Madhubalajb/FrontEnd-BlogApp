import React, {useState, useEffect} from 'react'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import BlogForm from './components/BlogForm'
import loginService from './services/login'
import signupService from './services/signup'
import blogService from './services/blog'

const App = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        blogService.getData().then(blogs => setBlogs(blogs))
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser') 
        if(loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username, password
            })
            window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
            blogService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
        }
        catch (exception){
            console.log(exception)
        }
    }

    const addUser = async (event) => {
        event.preventDefault()
        try {
            const addedUser = await signupService.signup({
                name, username, password
            })
            window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(addedUser))
            blogService.setToken(user.token)
            setName('')
            setUsername('')
            setPassword('')
        } 
        catch (exception) {
            console.log(exception)
        }
    }

    const createBlog = async (event) => {
        event.preventDefault()
        try {
            const blog = await blogService.postData({
                title, author, url
            })
            setBlogs(blogs.concat(blog))
            setTitle('')
            setAuthor('')
            setUrl('')
        }
        catch (exception) {
            console.log(exception)
        }
    }

    const showBlogs = (blogs) => blogs.map(blog => <p>{blog.title}</p>)

    const logoutUser = () => {
        setUser('')
        window.localStorage.removeItem('loggedBlogAppUser')
        blogService.setToken('')
    }

    const handleName = (event) => setName(event.target.value)
    const handleUsername = (event) => setUsername(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value)
    const handleTitle = (event) => setTitle(event.target.value)
    const handleAuthor = (event) => setAuthor(event.target.value)
    const handleUrl = (event)=> setUrl(event.target.value)
    
    if(user === '') {
        return (
            <LoginForm login={handleLogin} u_name={handleUsername} u_password={handlePassword} /> 
        )
    }
    return (
        <div>
            <p>{user.name} logged in</p><button onClick={logoutUser}>logout</button>

            <BlogForm blog={createBlog} title={handleTitle} author={handleAuthor} url={handleUrl} />

            <SignUpForm addUser={addUser} name={handleName} u_name={handleUsername} u_password={handlePassword} />

            <h1>Blogs</h1>
            {showBlogs(blogs)}
        </div>
    )
}

export default App
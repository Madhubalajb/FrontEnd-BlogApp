import React from 'react'

const BlogForm = (props) => {
    return (
        <div>
            <h1>Create new</h1>
            <form onSubmit={props.blog}>
                <input type="text" placeholder="Title" onChange={props.title} required/>
                <input type="text" placeholder="Author" onChange={props.author} required/>
                <input type="text" placeholder="url" onChange={props.url} required/>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default BlogForm
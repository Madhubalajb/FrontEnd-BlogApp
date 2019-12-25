import axios from 'axios'
const url = 'api/blogs'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getData = async () => {
    const response = await axios.get(url)
    return response.data
}

const postData = async (blog) => {
    const config = {
        headers: { Authorization : token },
    }
    const response = await axios.post(url, blog, config)
    return response.data
}

const updateData = async (id, blog) => {
    const response = await axios.put(`${url}${id}`, blog)
    return response.data
}

const deleteData = async (id, blog) => {
    const response = await axios.delete(`${url}/${id}`, blog)
    return response.data
}

export default { setToken, getData, postData, updateData, deleteData }
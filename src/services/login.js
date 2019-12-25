import axios from 'axios'
const baseUrl = 'api/login'

const login = async (credentials) => {
    const response = await axios.post(credentials, baseUrl)
    return response.data
}

export default { login }
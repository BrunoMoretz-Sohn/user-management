import axios from 'axios'

const api = axios.create({
  baseURL: 'https://user-management-hsbh.onrender.com'
})

export default api
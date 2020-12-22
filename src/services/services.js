import axios from 'axios'
const baseUrl = 'https://pacific-falls-13049.herokuapp.com'

const createCode = async (newObject) => {
  const response = await axios.post(baseUrl + `/users/${newObject.phoneNumber}`)
  return response.data
}

const validateCode = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

export default { 
  createCode: createCode,
  validateCode: validateCode
}
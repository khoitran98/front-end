import axios from 'axios'
const baseUrl = 'https://pacific-falls-13049.herokuapp.com'

const createCode = async (newObject) => {
  try {
    const response = await axios.post(baseUrl + `/users/${newObject.phoneNumber}`)
    return response.data
  } catch (error) {
    console.error(error);
    return error.toString()
  }
}

const validateCode = async (newObject) => {
  try {
    const response = await axios.post(baseUrl, newObject)
    return response.data
  } catch (error) {
    console.error(error);
    return error.toString()
  }
}

export default { 
  createCode: createCode,
  validateCode: validateCode
}
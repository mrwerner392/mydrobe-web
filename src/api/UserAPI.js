import { API_URL } from './APIConfig';

const userAPI = {
  createAccount: async data => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data })
    }
  
    try {
      const response = await fetch(API_URL + '/users', config)
      const resData = await response.json()
      if (response.ok) {
        return resData
      } else {
        return Promise.reject(resData.message)
      }
    } catch (e) {
      return Promise.reject(`Something went wrong :( Please try again`)
    }
  } 
}

export default userAPI
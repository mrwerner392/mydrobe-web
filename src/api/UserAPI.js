import { API_URL } from './APIConfig';

export const createAccount = data => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data })
  }

  return fetch(API_URL + '/users', config)
  .then(async res => {
    const data = await res.json()
    if (res.ok) {
      return data
    } else {
      throw new Error(data.message)
    }
  })
  .then(data => {
    console.log(data)
  })
  .catch(e => {
    console.log('error')
    console.log(e)
  })
}
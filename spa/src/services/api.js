const apiURL = 'http://localhost:5555/questions'
const fetch = window.fetch

const requestHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

class API {
  static createQuestion (questionData) {
    return fetch(apiURL, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(questionData)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static getQuestion (questionId) {
    return fetch(`${apiURL}/${questionId}`, {
      method: 'GET',
      headers: requestHeaders
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static getQuestions () {
    return fetch(apiURL, {
      method: 'GET',
      headers: requestHeaders
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static updateQuestion (questionId, questionData) {
    return fetch(`${apiURL}/${questionId}`, {
      method: 'PUT',
      headers: requestHeaders,
      body: JSON.stringify(questionData)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }
}

export default API

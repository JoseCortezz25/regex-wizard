import axios from 'axios'

export const getRegEx = (prompt) => {
  return axios.post(`${import.meta.env.VITE_URL}/prompt`, {
    text: `Necesito que me ayudes a crear una expresión regular, necesito que solo me des la expresión regular, sin nada más y además teniendo el siguiente que esta entre comillas prompt: ${prompt}. Recuerda, solo necesito la expresión regular.`
  })
}

export const getSpanishFromRegEx = (prompt) => {
  return axios.post(`${import.meta.env.VITE_URL}/prompt`, {
    text: `Necesito que tomes el regex que esta entre comillas y me expliques en palabras cortas que significa. Este es el regex: "${prompt}"`
  })
}
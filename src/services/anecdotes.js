import axios from 'axios'

const baseUrl = '/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateContent = async (content) => {
  const response = await axios.put(`${baseUrl}/${content.id}`, content)
  return response.data
}

const removeContent = async (content) => {
  const response = await axios.delete(`${baseUrl}/${content.id}`)
  return response.data
}

export default { getAll, createNew, updateContent, removeContent }
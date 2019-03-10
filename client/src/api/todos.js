import { HTTP } from './common'
export const Todo = {
  create (config) {
    return HTTP.post('/todos/', config).then(response => {
      return response.data
    })
  },
  delete (todo) {
    return HTTP.delete(`/todos/${todo.id}/`)
  },
  list () {
    return HTTP.get('/todos/').then(response => {
      return response.data
    })
  }
}
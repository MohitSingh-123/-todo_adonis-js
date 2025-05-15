'use strict'

// Bring in Model :
const Todo=use('App/Models/Todo')

class TodoController {

    async store({ request, response }) {
        const data = request.only(['task', 'is_completed']) // safe extraction
        const todo = await Todo.create(data)
        return response.status(201).json({
          message: 'Todo created successfully',
          data: todo
        })
      }
}

module.exports = TodoController

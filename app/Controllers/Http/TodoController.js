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

      async index() {
        const todos = await Todo.all()
        return todos
      }


    async update({params,request}){

        
        const body=request.all();
        const todo=await Todo.findOrFail(params.id)
        todo.task=body.task
        
         await todo.save();
         return todo;
    }

    async destroy({params,response}){

        const todo=await Todo.findOrFail(params.id)
      //  response.status(204)
        await todo.delete()
        return todo;
    }
}

module.exports = TodoController

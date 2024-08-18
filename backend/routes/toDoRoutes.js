//todosRoute.js
import express from 'express';
import { toDo } from '../models/todoModel.js';

const router = express.Router();
//used to get http method from server 

router.post('/', async (request, response) => {
    try {
            // Validate the request body
        if (
            !request.body.title 
        ) {
            return response.status(400).send({
                message: 'send all rq fields: title',
            });
        }
         // Create a new todo instance
        const newToDo = {
            title: request.body.title,
         
        };
        
        // Save the new todo to the database
        const todo = await toDo.create(newToDo);
        // Return status 201 and send the saved todo to the client
        return response.status(201).send(todo);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }

});

router.get('/', async (request, response) => {
    try {
        const todo = await toDo.find({});

        return response.status(200).json(
            {
                data: todo
            });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const todo = await toDo.findByIdAndDelete(id);
        if (!todo) {
            return response.status(404).json({ message: 'Book not found' })
        }

        return response.status(200).send({ message: 'successfully deleted book' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//to import our methods into index.js
export default router;
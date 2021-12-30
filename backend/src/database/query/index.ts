import { TodoDBQuery } from './TodoDBQuery'
import { TodoItem } from '../../models/TodoItem'

const todoQuery = new TodoDBQuery();

export async function getAllTodos(userId : string): Promise<TodoItem[]>{
    return todoQuery.getAllTodos(userId)
}

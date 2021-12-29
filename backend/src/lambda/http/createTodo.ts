import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { createLogger } from '../../utils/logger'
import { CreateTodoRequest } from '../../models/CreateTodoRequest'
import { getUserId } from '../utils'
import { createTodoItem } from '../../businessLogic/todos'

const logger = createLogger('createTodo')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const newTodo: CreateTodoRequest = JSON.parse(event.body)
  const userId = getUserId(event);
  logger.info("Creating new todo", {newTodo, userId})
  const newItem = await createTodoItem(newTodo, userId)
  logger.info("Created new todo", newItem)
  return {
    statusCode: 201, 
    headers:{
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials': true
    }, 
    body: JSON.stringify({
      item: newItem
    })
  }
}

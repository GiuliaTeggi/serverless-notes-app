import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { createLogger } from '../../utils/logger'
import CreateNoteRequest from '../../models/CreateNoteRequest'
import { getUserId } from '../utils'
import { createNoteItem } from '../../database/query'

const logger = createLogger('createTodo')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const newTodo: CreateNoteRequest = JSON.parse(event.body)
  const userId = getUserId(event);
  logger.info("Creating new todo", {newTodo, userId})
  const newItem = await createNoteItem(newTodo, userId)
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

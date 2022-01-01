import 'source-map-support/register';
import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda';
import { getUserId } from '../utils'
import { createLogger } from '../../utils/logger'
import { getAllNotes } from '../../database/query';

const logger = createLogger('getTodos')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  const userId = getUserId(event);
  logger.info('Getting todos', { userId: userId })
  const items = await getAllNotes(userId)
  logger.info('Get todos response', items)

  return {
    statusCode: 200, 
    headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Credentials': true
      }, 
    body : JSON.stringify({
      items
    })
  }
}

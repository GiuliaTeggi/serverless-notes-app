import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import { getUserId } from '../utils';
import { createLogger } from '../../utils/logger';
import { deleteNoteItem } from '../../database/query';

const logger = createLogger('deleteTodo')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const noteId = event.pathParameters.noteId
    const userId = getUserId(event);

    logger.info('Deleting note', { userId, noteId })
    const item = await deleteNoteItem(noteId, userId)
    logger.info('Deleted note', { userId, noteId })
    return {
      statusCode: 201, 
      headers:{
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Credentials': true
      }, 
      body: JSON.stringify({
        item
      })
    }
  }

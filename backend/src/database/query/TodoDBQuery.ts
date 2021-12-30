  
import * as AWS from 'aws-sdk'
import * as AWSXRay from 'aws-xray-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { TodoItem } from '../../models/TodoItem'

const XAWS = AWSXRay.captureAWS(AWS)

export class TodoDBQuery{
    private readonly docClient : DocumentClient;
    private readonly todosTable;
    public readonly notificationTable;
    constructor(){
    this.docClient = new XAWS.DynamoDB.DocumentClient();
    this.todosTable = process.env.TODOS_TABLE
    }

    async getAllTodos(userId: string): Promise<TodoItem[]>{
    const result = await this.docClient.query({
        TableName: this.todosTable, 
        KeyConditionExpression: 'userId = :userId', 
        ExpressionAttributeValues: {
          ':userId': userId
        }
      }).promise();

      const items = result.Items;
      return items as TodoItem[]
    }
}
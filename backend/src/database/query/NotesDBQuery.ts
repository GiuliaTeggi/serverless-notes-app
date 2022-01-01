  
import * as AWS from 'aws-sdk'
import * as AWSXRay from 'aws-xray-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import NoteItem from '../../models/NoteItem'

const XAWS = AWSXRay.captureAWS(AWS)

export default class NotesDBQuery{
    private readonly docClient : DocumentClient;
    private readonly notesTable;
    public readonly notificationTable;
    constructor(){
    this.docClient = new XAWS.DynamoDB.DocumentClient();
    this.notesTable = process.env.NOTES_TABLE
    }

    async getAllNotes(userId: string): Promise<NoteItem[]>{
    const result = await this.docClient.query({
        TableName: this.notesTable, 
        KeyConditionExpression: 'userId = :userId', 
        ExpressionAttributeValues: {
          ':userId': userId
        }
      }).promise();

      const items = result.Items;
      return items as NoteItem[]
    }

    async createNoteItem(note: NoteItem): Promise<NoteItem>{
      await this.docClient.put({
              TableName: this.notesTable,
              Item: note
              }).promise();
      return note
      }

}
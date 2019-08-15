import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';


export interface iConversation extends Document{

    id: number,
    timeStamp: String,
    message: string,
    sentBy: number,
    post_id: number

}

const ConversationSchema: Schema = new Schema({
   
    "id": { type: Number} ,
  
    "timeStamp": { type: String },
    "message": { type: String },
    "sentBy": { type: Schema.Types.ObjectId, ref: 'User'},
    "post_id" : { type : Schema.Types.ObjectId, ref: 'Post'}

});

export default  mongoose.model<iConversation>('Conversation', ConversationSchema);
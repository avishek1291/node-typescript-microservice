import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface iConversation extends Document {
  members: { member1: Object , member2: Object };
  messages: [];
  topic: number;
}

const ConversationSchema: Schema = new Schema({
  members: {
    member1: { type: Schema.Types.ObjectId, ref: "user" },
    member2: { type: Schema.Types.ObjectId, ref: 'user'}
  },
  messages: [{ type: Schema.Types.ObjectId , ref: "message"}],
  topic: { type: Schema.Types.ObjectId, ref: 'Post'}

});

export default mongoose.model<iConversation>(
  "Conversation",
  ConversationSchema
);

import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";
export interface iNegotiations extends Document {
  body: { message: string,  reply: string };
  lastUpdated: Date;
  negotiatorId: string;
  postId: string;
  isReplied: boolean;
}

const NegotiationSchema: Schema = new Schema({
  body: {
    message: { type: String },
    reply: { type: String }
  },
  negotiatorId: { type: Schema.Types.ObjectId, ref: "User" },
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
  lastUpdated: { type: Date, default: Date.now },
  isReplied: { type: Boolean, default: false }
});

export default mongoose.model<iNegotiations>("Negotiations", NegotiationSchema);

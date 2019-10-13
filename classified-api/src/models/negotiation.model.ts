import * as mongoose from "mongoose";
import { Schema, Document } from "mongoose";
export interface iNegotiations extends Document {
  body: { 
    message: string,
    from: { type: Schema.Types.ObjectId, ref: "User" },
    to: { type: Schema.Types.ObjectId, ref: "User" }
  };
  lastUpdated: Date;
  postId: string;
  isRead: boolean;
}

const NegotiationSchema: Schema = new Schema({
  body: {
    message: { type: String },
    from: { type: Schema.Types.ObjectId, ref: "User" },
    to: { type: Schema.Types.ObjectId, ref: "User" }
  },
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
  lastUpdated: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false }
});

export default mongoose.model<iNegotiations>("Negotiations", NegotiationSchema);

import * as mongoose from 'mongoose';
import  { Schema, Document } from 'mongoose';

export interface iState extends  Document{
   "id": number,
   "state_name": string,
   "country_code": string
}

const stateSchema : Schema  = new Schema({
    "id": {type:Number},
    "state_name": {type: String},
    "country_code": {type: String}
}) 

export default mongoose.model<iState>('country', stateSchema);
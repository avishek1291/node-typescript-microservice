import * as mongoose from 'mongoose';
import  { Schema, Document } from 'mongoose';

export interface iCity extends  Document{
   "id": number,
   "city_name": string,
   "state_code": string
}

const citySchema : Schema  = new Schema({
    "id": {type:Number},
    "city_name": {type: String},
    "state_code": {type: String}
}) 

export default mongoose.model<iCity>('state', citySchema);
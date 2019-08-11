import * as mongoose from 'mongoose';
import  { Schema, Document } from 'mongoose';

export interface iCountry extends  Document{
   "id": number,
   "country_name": string,
  
}

const countrySchema : Schema  = new Schema({
    "id": {type:Number},
    "country_name": {type: String},

}) 

export default mongoose.model<iCountry>('country', countrySchema);
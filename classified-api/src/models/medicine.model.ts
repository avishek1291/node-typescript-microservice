import * as mongoose from 'mongoose';
import  { Schema, Document } from 'mongoose';

export interface iMedicine extends  Document{
   medicine_name: string,
   img_url: string,
   description: string,
   price: Number,
   category: string,
   isAvailable: boolean,
   created_date: Date,
   last_updated: Date
}

const medicineListSchema : Schema  = new Schema({
    
    "medicine_name": {type: String},
    "img_url": {type: String},
    "description": {type: String},
    "price": {type: Number },
    "category": { type: Schema.Types.ObjectId, ref: 'category'},
    "isAvailable": { type: Boolean},
    "created_date": {type: Date},
    "last_updated": {type: Date},
    
}) 

export default mongoose.model<iMedicine>('medicine', medicineListSchema);
import * as mongoose from 'mongoose';
import  { Schema, Document } from 'mongoose';

export interface iPost extends  Document{
   id: number,
   post_title: string,
   post_img_url: string,
   post_details: string,
   post_category: Array<string>,
   created_date: Date,
   last_updated: Date,
   is_active: boolean,
   is_seller: boolean,
   is_individual: boolean,
   is_price_negotiable: boolean,
   expected_price: string,
   

}

const postSchema : Schema  = new Schema({
    "id": {type: Number},
    "post_title": {type: String},
    "post_img_url": {type: String},
    "post_details": {type: String},
    "post_category": {type: Array},
    "created_date": {type: Date},
    "last_updated": {type: Date},
    "is_active": {type: Boolean},
    "is_seller": {type:Boolean},
    "is_individual": {type:Boolean},
    "is_price_negotiable": {type:Boolean},
    "expected_price": String,
}) 

export default mongoose.model<iPost>('post', postSchema);
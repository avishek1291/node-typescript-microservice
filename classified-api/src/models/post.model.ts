import * as mongoose from 'mongoose';
import  { Schema, Document } from 'mongoose';

export interface iPost extends  Document{
   post_title: string,
   post_img_url: string,
   post_details: string,
   post_category: string,
   created_date: Date,
   last_updated: Date,
   is_active: boolean,
   is_seller: boolean,
   is_individual: boolean,
   posted_by : number,
   interest_shown: Array<Object>,
   is_price_negotiable: boolean,
   expected_price: string,
   

}

const postSchema : Schema  = new Schema({
    
    "post_title": {type: String},
    "post_img_url": {type: String},
    "post_details": {type: String},
    "post_category": {type: String },
    "created_date": {type: Date},
    "last_updated": {type: Date},
    "is_active": {type: Boolean},
    "is_seller": {type:Boolean},
    "is_individual": {type:Boolean},
    "posted_by": { type: Schema.Types.ObjectId, ref: 'User'},
    "interest_shown": [ 
       { "shown_by": { type: Schema.Types.ObjectId, ref: 'User' }, "chats": [{type: Schema.Types.ObjectId, ref: 'Conversation'}]}
    ],
    "is_price_negotiable": {type:Boolean},
    "expected_price": String,
}) 

export default mongoose.model<iPost>('post', postSchema);
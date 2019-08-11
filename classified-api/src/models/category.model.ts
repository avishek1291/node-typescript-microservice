import * as mongoose from 'mongoose';
import  { Schema, Document } from 'mongoose';

export interface iCategory extends Document{
    id: number,
    category_name: string,

}

const categorySchema: Schema = new Schema({
    id: { type : Number},
    category_name: { type: String },

})

export default  mongoose.model<iCategory>('category', categorySchema);
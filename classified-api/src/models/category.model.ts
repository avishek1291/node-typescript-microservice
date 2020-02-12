import * as mongoose from 'mongoose';
import  { Schema, Document } from 'mongoose';

export interface iCategory extends Document{
    id: number,
    category_name: string,
    medicines: Array<object>;

}

const categorySchema: Schema = new Schema({
    id: { type : Number},
    category_name: { type: String },
    medicines: [{ type: Schema.Types.ObjectId, ref: 'medicine'}]

})

export default  mongoose.model<iCategory>('category', categorySchema);
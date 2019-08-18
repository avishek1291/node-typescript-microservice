import * as mongoose from 'mongoose';
import  { Schema, Document } from 'mongoose';

export interface Iuser extends Document{
 //     id: number,
 first_name: string,
 last_name: string,
 phone_number: string,
 city_code: number,
 country_code: number,
 address_line_1: string,
 address_line_2: string,
 password_encrpt: string,
 isActive: boolean
}

const userSchema: Schema  = new Schema({

    first_name: {type: String },
    last_name: {type: String },
    phone_number: {type: Number },
    city_code: {type: Number },
    country_code: {type: Number },
    address_line_1: {type: String },
    address_line_2: {type: String },
    password_encrpt: {type: String },
    isActive: {type: Boolean }

})

export default mongoose.model<Iuser>('User', userSchema);
import * as mongoose from 'mongoose';
import  { Schema, Document } from 'mongoose';

export interface Iuser extends Document{
 id: number,
 first_name: string,
 last_name: string,
 phone_number: string,
 city_code: number,
 country_code: number,
 address_line_1: string,
 address_line_2: string,
 user_name: string,
 password_encrpt: string,
 isActive: boolean
}

const userSchema: Schema  = new Schema({

    id: {type: Number, unique: true },
    first_name: {type: String, unique: false },
    last_name: {type: String, unique: false },
    phone_number: {type: Number, unique: false },
    city_code: {type: Number, unique: false },
    country_code: {type: Number, unique: false },
    address_line_1: {type: String, unique: false },
    address_line_2: {type: String, unique: false },
    user_name: {type: String, unique: true },
    password_encrpt: {type: String, unique: true },
    isActive: {type: Boolean }

})

export default mongoose.model<Iuser>('User', userSchema);
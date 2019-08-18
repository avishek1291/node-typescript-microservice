import { Iuser } from "../models/user.model";
export class UserRequestMapper {
  getUserSignUpPayload(payload) {
   // return {
    //   "first_name": payload.firstName,
    //   "last_name": payload.lastName,
    //   "phone_number": payload.phone_number,
    //   "city_code": payload.cityCode,
    //   "country_code": payload.countryCode,
    //   "address_line_1": payload.addressOne,
    //   "address_line_2": payload.addressTwo,
    //   "password_encrpt": payload.password,
    //   "isActive": payload.isActive,

   // };
  }

  getAllpostResponse(dbResponse){
    return {
      
    }
  }
}
export const userRequestMapper = new UserRequestMapper();

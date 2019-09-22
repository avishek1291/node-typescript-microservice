import UserModel from "../models/user.model";
import { userRequestMapper } from "../utilities/userRequestMapper";
import negotiationModel from '../models/negotiation.model';
export class UserService {
   userSignUp = async userPayload => {
    console.log("inside classified service", userPayload);
    let User = new UserModel({
      first_name: userPayload.firstName,
      last_name: userPayload.lastName,
      phone_number: userPayload.phoneNumber,
      city_code: userPayload.cityCode,
      country_code: userPayload.countryCode,
      address_line_1: userPayload.addressOne,
      address_line_2: userPayload.addressTwo,
      password_encrpt: userPayload.password,
      isActive: userPayload.isActive
    });

    const response = await User.save();
    return response;
  };
  getAllusers = async () => {
    const allUsers =  await UserModel.find({});
    return allUsers;
  }

  postNegotiationMessage = async (payload) =>{
    const negotiation = new negotiationModel(payload);
    return await negotiation.save();
  }
}
export const userService = new UserService();

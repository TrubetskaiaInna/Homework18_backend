import {Document, Schema, model} from "mongoose";

export interface UserInterface extends Document {
    firstName: string;
    lastName: string;
    email: string;
    address: {
        street: string,
        city: string
    }
}

export const AddressSchema = new Schema({
    street: {type: String, required: true},
    city: {type: String, required: true}
});

export const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: AddressSchema, required: true}
});

const User = model<UserInterface>("User", UserSchema);
export default User;

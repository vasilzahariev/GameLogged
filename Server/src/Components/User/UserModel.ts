/*
 * @file UserModel.ts
 * @author vasil
 * @created 12/27/23, 12:36 AM
 * @modified 12/27/23, 12:36 AM
 */

import { BaseModel } from "../Base/BaseModel";
import { IUser } from "./IUser";
import { Schema } from "mongoose";

class UserModel extends BaseModel<IUser> {
	constructor() {
		super(
			'User',
			{
				username : {
					type : Schema.Types.String,
					required : true,
					unique : true,
					minlength : 3
				},
				email : {
					type : Schema.Types.String,
					required : true,
					unique : true,
					match: /^(([^<>()\[\]\\\\.,;:\s@"]+(\.[^<>()\[\]\\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				},
				password : {
					type : Schema.Types.String,
					required : true,
					minlength : 6,
				},
				fullName : {
					type : Schema.Types.String,
					default : 'Unknown',
				},
				profilePicture : {
					type : Schema.Types.String,
					default : '', // TODO Insert default profile picture link
				}
			}
		);
	}
}

export default (new UserModel()).init();

/*
 * @file UserController.ts
 * @author vasil
 * @created 12/27/23, 12:43 AM
 * @modified 12/27/23, 12:43 AM
 */

import { BaseController } from "../Base/BaseController";
import { IUser } from "./IUser";
import UserModel from "./UserModel";

class UserController extends BaseController<IUser> {
	constructor() {
		super(UserModel);
	}
}

export default new UserController();

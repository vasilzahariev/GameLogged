/*
 * @file IList.ts
 * @author vasil
 * @created 12/27/23, 12:58 AM
 * @modified 12/27/23, 12:58 AM
 */

import { Schema } from "mongoose";

export interface IList {
	userId : Schema.Types.ObjectId;

	listName : string;

	games : Schema.Types.ObjectId[];

	description? : string;

	ranked : boolean;

	public : boolean;
}

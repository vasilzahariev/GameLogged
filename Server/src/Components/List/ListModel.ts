/*
 * @file ListModel.ts
 * @author vasil
 * @created 12/27/23, 1:00 AM
 * @modified 12/27/23, 1:00 AM
 */

import { BaseModel } from "../Base/BaseModel";
import { IList } from "./IList";
import { Schema } from "mongoose";

class ListModel extends BaseModel<IList> {
	constructor() {
		super(
			'List',
			{
				userId : {
					type : Schema.Types.ObjectId,
					required : true,
				},

				listName : {
					type : Schema.Types.String,
					required : true,
				},

				games : {
					type : [ Schema.Types.ObjectId ],
					default : [],
				},

				description : {
					type : Schema.Types.String,
					default : '',
				},

				ranked : {
					type : Schema.Types.Boolean,
					default : false,
				},

				public : {
					type : Schema.Types.Boolean,
					default : false,
				},
			}
		);
	}
}

export default (new ListModel()).init();

/*
 * @file GameCompanyModel.ts
 * @author vasil
 * @created 12/27/23, 12:24 AM
 * @modified 12/27/23, 12:24 AM
 */

import { BaseModel } from "../Base/BaseModel";
import { IGameCompany } from "./IGameCompany";
import { Schema } from "mongoose";

class GameCompanyModel extends BaseModel<IGameCompany> {
	constructor() {
		super(
			'GameCompany',
			{
				companyId : {
					type : Schema.Types.ObjectId,
					required : true,
				},
				gameId : {
					type : Schema.Types.ObjectId,
					required : true,
				},
				type : {
					type : Schema.Types.String,
					required : true
				},
			}
		);
	}
}

export default (new GameCompanyModel()).init();

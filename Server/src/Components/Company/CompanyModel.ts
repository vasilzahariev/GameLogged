/*
 * @file CompanyModel.ts
 * @author vasil
 * @created 12/26/23, 10:48 PM
 * @modified 12/26/23, 10:48 PM
 */

import { BaseModel } from "../Base/BaseModel";
import { ICompany } from "./ICompany";
import { Schema } from "mongoose";

export class CompanyModel extends BaseModel<ICompany> {
	constructor() {
		super(
			'Company',
			{
				name : {
					type : Schema.Types.String,
					required : true,
					unique : true,
				},
				description : {
					type : Schema.Types.String,
				},
				logo : {
					type : Schema.Types.String,
				},
				officialWebsite : {
					type : Schema.Types.String,
				},
			},
		);
	}
}

export default (new CompanyModel()).init();

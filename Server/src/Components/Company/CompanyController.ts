/*
 * @file CompanyController.ts
 * @author vasil
 * @created 12/26/23, 11:26 PM
 * @modified 12/26/23, 11:26 PM
 */

import { BaseController } from "../Base/BaseController";
import { ICompany } from "./ICompany";
import CompanyModel from "./CompanyModel";
import { HydratedDocument, Schema } from "mongoose";

class CompanyController extends BaseController<ICompany> {
	constructor() {
		super(CompanyModel);
	}

	public async add(body : ICompany) : Promise<HydratedDocument<ICompany>> {
		if ( ! body.name ) {
			throw new Error('Name is required!');
		}

		return super.add(body);
	}

	public async edit(id : Schema.Types.ObjectId, body : ICompany) : Promise<HydratedDocument<ICompany>> {
		if ( ! body.name ) {
			throw new Error('Name is should be valid!');
		}

		return super.edit(id, body);
	}
}

export default new CompanyController();

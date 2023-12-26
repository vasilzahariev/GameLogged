/*
 * @file GameCompanyController.ts
 * @author vasil
 * @created 12/27/23, 12:27 AM
 * @modified 12/27/23, 12:27 AM
 */

import { BaseController } from "../Base/BaseController";
import { IGameCompany } from "./IGameCompany";
import GameCompanyModel from "./GameCompanyModel";

class GameCompanyController extends BaseController<IGameCompany> {
	constructor() {
		super(GameCompanyModel);
	}
}

/*
 * @file IGameCompany.ts
 * @author vasil
 * @created 12/27/23, 12:20 AM
 * @modified 12/27/23, 12:20 AM
 */

import { Schema } from "mongoose";
import { GameCompanyType } from "./GameCompanyType";

export interface IGameCompany {
	gameId : Schema.Types.ObjectId;

	companyId : Schema.Types.ObjectId;

	type : GameCompanyType;
}

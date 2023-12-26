/*
 * @file IReview.ts
 * @author vasil
 * @created 12/27/23, 12:47 AM
 * @modified 12/27/23, 12:47 AM
 */

import { Schema } from "mongoose";

export interface IReview {
	userId : Schema.Types.ObjectId;

	gameId : Schema.Types.ObjectId;

	review : string;

	rating : number;

	platform : string;
}

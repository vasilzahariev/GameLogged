/*
 * @file ReviewModel.ts
 * @author vasil
 * @created 12/27/23, 12:51 AM
 * @modified 12/27/23, 12:51 AM
 */

import { BaseModel } from "../Base/BaseModel";
import { IReview } from "./IReview";
import { Schema } from "mongoose";

class ReviewModel extends BaseModel<IReview> {
	constructor() {
		super(
			'Review',
			{
				userId : {
					type : Schema.Types.ObjectId,
					required : true,
				},
				gameId : {
					type : Schema.Types.ObjectId,
					required : true,
				},
				review : {
					type : Schema.Types.String,
				},
				rating : {
					type : Schema.Types.Number,
				},
				platform : {
					type : Schema.Types.String,
				},
			}
		);
	}
}

export default (new ReviewModel()).init();

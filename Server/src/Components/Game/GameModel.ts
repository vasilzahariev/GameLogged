/*
 * @file GameModel.ts
 * @author vasil
 * @created 12/22/23, 10:56 PM
 * @modified 12/22/23, 10:56 PM
 */

import { Schema } from 'mongoose';
import { IGame } from "./IGame";
import { BaseModel } from "../Base/BaseModel";

class GameModel extends BaseModel<IGame> {
	constructor() {
		super(
			'Game',
			{
				name : {
					type : Schema.Types.String,
					required : true,
					unique : true,
				},
				description : {
					type : Schema.Types.String,
				},
				releaseDate : {
					type : Schema.Types.Date,
				},
				cover : {
					type : Schema.Types.String,
				},
				genres : {
					type : [ Schema.Types.String ],
				},
				platforms : {
					type : [ Schema.Types.String ],
				},
				officialWebsite : {
					type : Schema.Types.String,
				}
			}
		);
	}
}

export default (new GameModel()).init();

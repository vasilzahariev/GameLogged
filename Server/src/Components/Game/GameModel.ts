/*
 * @file GameModel.ts
 * @author vasil
 * @created 12/22/23, 10:56 PM
 * @modified 12/22/23, 10:56 PM
 */

import { Schema, model, Model } from 'mongoose';
import { IGameModel } from "./IGameModel";
import { BaseModel } from "../Base/BaseModel";

class GameModel extends BaseModel<IGameModel> {
	public init() : Model<IGameModel> {
		const schema : Schema<IGameModel> = this.initSchema();

		return model<IGameModel>('Game', schema);
	}

	protected initSchema() : Schema<IGameModel> {
		return new Schema<IGameModel>({
			name : {
				type : Schema.Types.String,
				required : true,
			},
			description : {
				type : Schema.Types.String,
			},
			releaseDate : {
				type : Schema.Types.Date,
			},
			icon : {
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
		});
	}
}

export default new GameModel().init();

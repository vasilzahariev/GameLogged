/*
 * @file BaseModel.ts
 * @author vasil
 * @created 12/22/23, 11:30 PM
 * @modified 12/22/23, 11:30 PM
 */

import { Model, Schema } from 'mongoose';
import { IGameModel } from "../Game/IGameModel";

export abstract class BaseModel<T> {
	public abstract init() : Model<T>;

	protected abstract initSchema() : Schema<IGameModel>;
}

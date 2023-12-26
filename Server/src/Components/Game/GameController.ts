/*
 * @file GameController.ts
 * @author vasil
 * @created 12/22/23, 10:55 PM
 * @modified 12/22/23, 10:55 PM
 */


import GameModel from './GameModel';
import { Schema, HydratedDocument } from 'mongoose';
import { IGame } from './IGame';
import { BaseController, QueryType } from "../Base/BaseController";

class GameController extends BaseController<IGame> {
	constructor() {
		super(GameModel);
	}

	public async add(body : IGame) : Promise<HydratedDocument<IGame>> {
		if ( ! body.name ) {
			throw new Error('Name is required!');
		}

		return super.add(body);
	}

    public async edit(id : Schema.Types.ObjectId, body : IGame) : Promise<HydratedDocument<IGame>> {
        if ( ! body.name ) {
			throw new Error('Name is should be valid!');
		}

		return await super.edit(id, body);
    }

	public async deleteByName(name : string) : Promise<any> {
		if ( ! name ) {
			throw new Error('Name should be valid!');
		}

		const query : QueryType<IGame> = this.model.findOneAndDelete({ name });

		try {
			await query.exec();

			// TODO Think how to notify the FE that the action has been successful
		} catch (err) {
			console.error(err);

			throw err;
		}
	}

	public async findByName(name : string) : Promise<HydratedDocument<IGame>> {
		if ( ! name ) {
			throw new Error('name should be valid');
		}

		const query : QueryType<IGame> = this.model.findOne({ name });

		try {
			const game : HydratedDocument<IGame> = await query.exec();

			return game;
		} catch (err) {
			console.error(err);

			throw err;
		}
	}
}

export default new GameController();

/*
 * @file GameController.ts
 * @author vasil
 * @created 12/22/23, 10:55 PM
 * @modified 12/22/23, 10:55 PM
 */


import GameModel from './GameModel';
import { Schema, HydratedDocument, Query } from 'mongoose';
import { IGameModel } from './IGameModel';

type FindByIdQueryType = Query<HydratedDocument<IGameModel> | null, HydratedDocument<IGameModel>, {}, DocumentType, 'findById'>;
type FindOneQueryType = Query<HydratedDocument<IGameModel> | null, HydratedDocument<IGameModel>, {}, DocumentType, 'findOne'>;
type FindByIdAndUpdateQueryType = Query<HydratedDocument<IGameModel> | null, HydratedDocument<IGameModel>>

class GameController {
	public async createGame(body : any) : Promise<void> {
		const name : string = body.name;
		const description : string = body.description;
		const releaseDate : Date = body.releaseDate;
		const icon : string = body.icon;
		const genres : string[] = body.genres;
		const platforms : string[] = body.platforms;
		const officialWebsite = body.officialWebsite;

		if ( ! name ) {
			throw new Error('Name is required!');
		}

		try {
			const game : HydratedDocument<IGameModel> = new GameModel({
				name,
				description,
				releaseDate,
				icon,
				genres,
				platforms,
				officialWebsite
			});

			await game.save();
		} catch (err) {
			console.error(err);

			throw err;
		}
	}

	public async getGameById(id : Schema.Types.ObjectId) : Promise<HydratedDocument<IGameModel>> {
		const query : FindByIdQueryType = GameModel.findById(id);
		const document : HydratedDocument<IGameModel> = await query.exec();

		if ( document === null ) {
			throw new Error(`There is no game with id: ${id}`);
		}

		return document;
	}

	public async getGameByName(name : string) : Promise<HydratedDocument<IGameModel>> {
		const query : FindOneQueryType = GameModel.findOne({ name });
		const document : HydratedDocument<IGameModel> = await query.exec();

		if ( document === null ) {
			throw new Error(`There is no game with name: ${name}`);
		}

		return document;
	}

	public async editGame(body : any) : Promise<void> {
		const gameId : string = body.gameId;
		const name : string = body.name;
		const description : string = body.description;
		const releaseDate : Date = body.releaseDate;
		const icon : string = body.icon;
		const genres : string[] = body.genres;
		const platforms : string[] = body.platforms;
		const officialWebsite = body.officialWebsite;

		try {
			const query : FindByIdAndUpdateQueryType = GameModel.findByIdAndUpdate(
				{ _id: gameId  },
				{
					name,
					description,
					releaseDate,
					icon,
					genres,
					platforms,
					officialWebsite,
				},
			);

			await query.exec();

			// TODO It'll be good to return some type of success message so that the FE knows everything went well
		} catch (err) {
			console.error(err);

			throw err;
		}
	}
}

export default new GameController();

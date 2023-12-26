/*
 * @file IGameModel.ts
 * @author vasil
 * @created 12/22/23, 10:59 PM
 * @modified 12/22/23, 10:59 PM
 */

export interface IGameModel {
	name : string;

	description : string;

	releaseDate : Date;

	icon : string;

	genres : string[];

	platforms : string[];

	officialWebsite : string;
}

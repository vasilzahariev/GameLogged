/*
 * @file IGame.ts
 * @author vasil
 * @created 12/22/23, 10:59 PM
 * @modified 12/22/23, 10:59 PM
 */

export interface IGame {
	name : string;

	description : string;

	releaseDate : Date;

	cover : string;

	genres : string[];

	platforms : string[];

	officialWebsite : string;
}

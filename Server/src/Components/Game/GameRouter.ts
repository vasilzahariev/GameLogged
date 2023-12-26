/*
 * @file GameRouter.ts
 * @author vasil
 * @created 12/23/23, 12:00 AM
 * @modified 12/23/23, 12:00 AM
 */

import { BaseRouter } from '../Base/BaseRouter';
import { Request, Response } from 'express';

class GameRouter extends BaseRouter {
	constructor() {
		super();

		// this.router.get('/:name', this.getGame.bind(this));
		// this.router.post('/');
	}

	private async add(req : Request, res : Response) : Promise<void> {
		// TODO
	}
}

export default new GameRouter();

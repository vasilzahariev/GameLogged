/*
 * @file BaseRouter.ts
 * @author vasil
 * @created 12/23/23, 12:00 AM
 * @modified 12/23/23, 12:00 AM
 */

import express, { Express } from 'express';

export abstract class BaseRouter {
	protected _router : Express = express();

	public get router() : Express {
		return this._router;
	}
}

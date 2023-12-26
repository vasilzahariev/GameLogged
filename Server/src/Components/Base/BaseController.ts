/*
 * @file BaseController.ts
 * @author vasil
 * @created 12/26/23, 10:55 PM
 * @modified 12/26/23, 10:55 PM
 */

import { HydratedDocument, Model, Query, Schema } from "mongoose";

export type QueryType<T> = Query<HydratedDocument<T> | null, HydratedDocument<T>>

export abstract class BaseController<SchemaInterface> {
	protected model : Model<SchemaInterface>;

	protected constructor(model : Model<SchemaInterface>) {
		this.model = model;
	}

	public async add(body : SchemaInterface) : Promise<HydratedDocument<SchemaInterface>> {
		try {
			const component : HydratedDocument<SchemaInterface> = new this.model(body);

			await component.save();

			return component;
		} catch (err) {
			console.error(err);

			throw err;
		}
	}

	public async edit(id : Schema.Types.ObjectId, body : SchemaInterface) : Promise<HydratedDocument<SchemaInterface>> {
		const query : QueryType<SchemaInterface> = this.model.findByIdAndUpdate(
			id,
			body,
		);

		try {
			const component : HydratedDocument<SchemaInterface> = await query.exec();

			return component;
		} catch (err) {
			console.error(err);

			throw err;
		}
	}

	public async deleteById(id : Schema.Types.ObjectId) : Promise<any> {
		const query : QueryType<SchemaInterface> = this.model.findByIdAndDelete(id);

		try {
			await query.exec();

			// TODO Think how to notify the FE that the action has been successful
		} catch (err) {
			console.error(err);

			throw err;
		}
	}

	public async findById(id : Schema.Types.ObjectId) : Promise<HydratedDocument<SchemaInterface>> {
		const query : QueryType<SchemaInterface> = this.model.findById(id);
		const component : HydratedDocument<SchemaInterface> = await query.exec();

		if ( component === null ) {
			throw new Error(`There is no component with id: ${id}`);
		}

		return component;
	}
}

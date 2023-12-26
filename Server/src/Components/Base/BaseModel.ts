/*
 * @file BaseModel.ts
 * @author vasil
 * @created 12/22/23, 11:30 PM
 * @modified 12/22/23, 11:30 PM
 */

import { model, Model, Schema, SchemaDefinition } from 'mongoose';

export abstract class BaseModel<SchemaInterface> {
	public readonly NAME : string;

	protected readonly SCHEMA_DEFINITION : SchemaDefinition<SchemaInterface>;

	protected constructor(
		name : string,
		schemaDefinition : SchemaDefinition<SchemaInterface>,
	) {
		this.NAME = name;
		this.SCHEMA_DEFINITION = schemaDefinition;
	}

	public init() : Model<SchemaInterface> {
		const schema : Schema<SchemaInterface> = this.initSchema();

		return model<SchemaInterface>(this.NAME, schema);
	}

	protected initSchema() : Schema<SchemaInterface> {
		return new Schema<SchemaInterface>(
			this.SCHEMA_DEFINITION,
		);
	}
}

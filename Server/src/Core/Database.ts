import * as mongoose from "mongoose";

class Database {
    public initEnvironmentVariables() : void {
        if ( ! process.env.DATABASE_URL ) {
            throw new Error('[server]: Server doesn\'t have a database url!');
        }

        this.databaseUrl = process.env.DATABASE_URL;
    }

    public async connect() : Promise<void> {
        try {
            await mongoose.connect(this.databaseUrl);
        } catch (err) {
            console.log('[server]: Error occurred while trying to connect with the database:', err);

            throw err;
        }

        console.log('[server]: Database connected successfully!');
    }

    private databaseUrl : string;
}

export default new Database();

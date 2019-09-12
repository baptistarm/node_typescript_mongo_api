import * as express from "express";
import Database from "./infra/database";

class StartUp {
    public app: express.Application;
    private _db: Database;

    constructor() {
        this.app = express();
        this._db = new Database();
        this._db.createConnection();
        this.routes();
    }

    routes() {
        this.app.route('/').get((req, res) => {
            res.send('versão: 0.0.1');
        });
    }
}

export default new StartUp();
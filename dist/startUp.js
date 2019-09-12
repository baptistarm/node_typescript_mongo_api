"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = require("./infra/database");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new database_1.default();
        this._db.createConnection();
        this.routes();
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send('versão: 0.0.1');
        });
    }
}
exports.default = new StartUp();

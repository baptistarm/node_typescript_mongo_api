"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_1 = require("./infra/database");
const bodyParser = require("body-parser");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new database_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send('versão: 0.0.1');
        });
    }
}
exports.default = new StartUp();

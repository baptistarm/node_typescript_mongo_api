"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const NewsSchema = new mongoose.Schema({
    hat: { type: String },
    title: { type: String },
    author: { type: String },
    text: { type: String },
    img: { type: String },
    puclishDate: { type: Date },
    link: { type: String },
    active: { type: Boolean },
});
exports.default = NewsSchema;
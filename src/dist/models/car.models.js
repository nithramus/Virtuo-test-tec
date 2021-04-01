"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarSchema = void 0;
const mongoose_1 = require("mongoose");
const CarSchema = new mongoose_1.Schema({
    name: {
        type: String,
        minLength: 3,
    },
    available: Boolean,
});
exports.CarSchema = CarSchema;
//# sourceMappingURL=car.models.js.map
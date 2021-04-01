"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let env;
const local_1 = __importDefault(require("./local"));
if (process.env.NODE_ENV !== "local") {
    env = process.env;
}
else {
    env = local_1.default;
}
exports.default = env;
//# sourceMappingURL=index.js.map
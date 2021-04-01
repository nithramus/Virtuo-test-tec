"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("../env/index"));
const host = index_1.default.MONGO_HOST;
const password = index_1.default.MONGO_PASSWORD;
const login = index_1.default.MONGO_LOGIN;
const dataBaseName = index_1.default.MONGO_NAME;
mongoose_1.default.connect(`mongodb://${login}:${password}@${host}:27017/${dataBaseName}?authSource=admin`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "database connection error:"));
db.once("open", () => __awaiter(this, void 0, void 0, function* () {
    console.log("database connected");
}));
exports.default = db;
//# sourceMappingURL=mongoose.js.map
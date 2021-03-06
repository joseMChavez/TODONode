"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv = __importStar(require("dotenv"));
const routes_1 = require("./routes");
const mongoconfig_1 = __importDefault(require("./Infrastructure/database/mongodb/mongoconfig"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
//import * as swaggerDocument from './swagger.json'
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    dotenv.config();
    const PORT = process.env.PORT || 7000;
    //const td = Container.get(TodoController);
    const con = new mongoconfig_1.default();
    con.Access();
    const allowedOrigins = ['*'];
    const options = {
        origin: allowedOrigins
    };
    app.use((0, cors_1.default)(options));
    app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
        swaggerOptions: {
            url: "./swagger.json",
        },
    }));
    app.use(body_parser_1.default.urlencoded({
        extended: true,
    }));
    app.use(body_parser_1.default.json());
    //app.use(express.static("public"));
    (0, routes_1.RegisterRoutes)(app);
    //app.use(router);
    //3000
    app.listen(PORT, () => {
        console.log('Server started....');
    });
});
main().catch(err => {
    console.error(err);
});

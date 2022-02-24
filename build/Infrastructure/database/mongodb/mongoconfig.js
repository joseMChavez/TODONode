"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class MongoDBConect {
    Access() {
        const uri = "mongodb://localhost:27017/TodoDb"; ///= `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
        //const options = { useNewUrlParser: true, useUnifiedTopology: true }
        //mongoose.set("useFindAndModify", false)
        mongoose_1.default.connect(uri)
            .then(() => console.log("Estamos conectados..."))
            .catch(error => {
            throw error;
        });
    }
}
exports.default = MongoDBConect;

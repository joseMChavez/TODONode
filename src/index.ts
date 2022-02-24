import 'reflect-metadata';
import express, { Express } from "express"
import cors from "cors"
import * as bodyParser from 'body-parser';
import router from './Application/controllers/todo/index';
import MongoDBConect from './Infrastructure/database/mongodb/mongoconfig';
//import sweggerui from "swagger-ui-express";
const main = async () => {
  const app:Express = express();
 
  const PORT: string | number = process.env.PORT || 4000
  const con: MongoDBConect= new MongoDBConect();
  con.Access();
  const allowedOrigins = ['http://localhost:4000'];
  const options: cors.CorsOptions = {
    origin: allowedOrigins
  };
  app.use(cors(options));
  app.use(bodyParser.json());
  app.use(router);


  //3000
  app.listen(PORT, () => {
    console.log('Server started....');
  });
}

main().catch(err => {
  console.error(err);
});

import 'reflect-metadata';
import express, { Express } from "express"
import cors from "cors"
import  bodyParser from 'body-parser';
import * as dotenv from "dotenv";

import { RegisterRoutes } from "./routes";
import MongoDBConect from './Infrastructure/database/mongodb/mongoconfig';
import swaggerUi from "swagger-ui-express";
//import * as swaggerDocument from './swagger.json'

const main = async () => {
  const app:Express = express();
  dotenv.config();
  const PORT: string | number = process.env.PORT || 7000;
  //const td = Container.get(TodoController);
  const con: MongoDBConect= new MongoDBConect();
  con.Access();
  
  const allowedOrigins =['*'];
  
  const options: cors.CorsOptions = {
    origin: allowedOrigins
  };
  app.use(cors(options));
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "./swagger.json",
    },
  }));
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
  //app.use(express.static("public"));

  RegisterRoutes(app);
  //app.use(router);
  //3000
  app.listen(PORT, () => {
    console.log('Server started....');
  });
}

main().catch(err => {
  console.error(err);
});

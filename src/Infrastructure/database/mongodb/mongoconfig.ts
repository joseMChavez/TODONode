import mongoose from "mongoose"

export default class MongoDBConect{
  public Access (){

    const uri: string =process.env.MONGO_CON_STR || "";///= `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
    //const options = { useNewUrlParser: true, useUnifiedTopology: true }
    //mongoose.set("useFindAndModify", false)
    
     mongoose.connect(uri)
      .then(() =>
        console.log("We are connected...")
      )
      .catch(error => {
        throw error
      });
}
}

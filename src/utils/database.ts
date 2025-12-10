import mongoose, { Mongoose } from "mongoose";



interface MongooseConection{
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;

}

let cached : MongooseConection = (global as any).moongose

if(!cached){
    cached = (global as any).mongose ={
        conn: null,
        promise: null,
    }
}

export const connectToBBDD = async () =>{

    if(cached.conn) return cached.conn

    if(!process.env.MONGO_URL) throw new Error('falta MONGO_URL')
    cached.promise = cached.promise || mongoose.connect(process.env.MONGO_URL,{
        dbName: 'mongo-db-1',//app_listatareas
        bufferCommands: false, 
    })

    cached.conn = await cached.promise

    return cached.conn
}
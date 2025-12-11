//https://hub.docker.com/_/mongo
//https://hub.docker.com/_/postgres
//https://mongoosejs.com/
//https://mongoosejs.com/docs/index.html

//https://7sabores.com/blog/mi-primera-aplicacion-con-nexts-y-mongodb
//https://dev.to/dee_codes/how-to-set-up-mongodb-with-nextjs-2lkb
//https://medium.com/@pareekpnt/how-to-connect-mongodb-with-next-js-a-complete-guide-3adab2a9f37b
//https://dev.to/dee_codes/how-to-set-up-mongodb-with-nextjs-2lkb
//https://www.youtube.com/watch?v=NHxpn5F431w&pp=ygUVbmV4dCBtb25nbyBjYXN0ZWxsYW5v 32 min conexion next
//https://www.youtube.com/watch?v=TB6rpo3bp5M&pp=ygUVbmV4dCBtb25nbyBjYXN0ZWxsYW5v 22min conexion next
//https://www.youtube.com/watch?v=CkiuF2wsPRg&pp=ygUVbmV4dCBtb25nbyBjYXN0ZWxsYW5v  crud (1:40 h/min) next

0. gitignore:

    ````
    .env

    mongo/

    ````


1. env:

````
PORT=3000

MAILER_SERVICE=gmail
MAILER_EMAIL=fernando@google.com
MAILER_SECRET_KEY=123123123


PROD=false


MONGO_URL=mongodb://fernando:123456@localhost:27017
MONGO_DB_NAME=NOC
MONGO_USER=fernando
MONGO_PASS=123456


POSTGRES_URL=
POSTGRES_USER=postgres
POSTGRES_DB=NOC
POSTGRES_PASSWORD=123456
````

2. añdir " --clear " en package.json:

```
"scripts": {
    "dev": "tsnd --respawn --clear src/app.ts",

```

3. raiz añadir "docker-compose.yml"  para trabajar con mongo docker. Abrir docker desktop:
  probar con el nombre de bbd - MONGO_INITDB_DATABASE=${MONGO_DB_NAME}
````
version: '3.8'


services:
  mongo-db:
    image: mongo:6.0.6
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_USER}
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_PASS}
    volumes:
      - ./mongo:/data/db
    ports:
      - 27017:27017


````

#npm install mongodb
https://www.npmjs.com/package/mongodb
https://www.mongodb.com/resources/languages/mongodb-and-npm-tutorial
https://mongoosejs.com/ npm install mongoose
https://www.npmjs.com/package/dotenv npm i dotenv


4. comprobar docker: docker --version

5. instalar y levantar docker mongo, terminal: docker compose up -d

6. instalar y levantar docker mongo detach (terminal libre), terminal: docker compose up -d

7. trabajar con mongo " https://www.mongodb.com/products/tools/compass ": llamar mongodb compass

                --crear nueva connexion (uri): mongodb://localhost:27017

                adv conexxion opt: authentication(poner las variables de entorno)
                                        --username
                                        --password
                arriba verificar que se ha creado cadena de conexion (usery password)
                save & connect
                name: noc-mongo

                despues de conectar en lateral: localhost:27017, ... y coger "copy connection string".

8. ir a  ".env" y copiarlo en " MONGO_URL= ": MONGO_URL=mongodb://fernando:123456@localhost:27017


9. instalar: 

#npm install mongodb
https://www.npmjs.com/package/mongodb
https://www.mongodb.com/resources/languages/mongodb-and-npm-tutorial
https://mongoosejs.com/ npm install mongoose
https://www.npmjs.com/package/dotenv npm i dotenv

10. guardar conexion mongodb, crear  "src/utils/database.ts":

````
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

````

11. crear modelos "/src/models/tareas.ts":

````
const TareaSchema =new Schema(
    {

        titulo:{
            type: String,
            required: true
        },
        desc:{
            type: String,
        },
        date:{
            type:Date,
            default: new Date(),      
        },
        isCompleted:{
            type:Boolean,
        },

    })

    const Tarea = models.Tarea || model('Tarea',TareaSchema)

    export default Tarea


````

12. crear "/src/lib/actions.tarea.ts":

````
'use server'

import Tarea from "@/models/tareas";
import { connectToBBDD } from "@/utils/database"

export const CreateTarea = async() =>{
    const tareaNueva ={
        titulo: "Comprar comestibles",
      desc: "Compra alimentos para la semana: leche, huevos, pan, frutas y verduras.",
      isCompleted: false
    }


await connectToBBDD();

try {
    const tarea = new Tarea(tareaNueva)
    const tareaCreada = await tarea.save()

    return tareaCreada
    
} catch (error) {
    console.log({error})
}

}

````

13. ir a "/src/app/page.tsx" y llamar funcion  de chequeo de conexion:

````

export default async function Home() {

const tarea = await CreateTarea();

  return (

````

14. correr la tarea , terminal: npm run dev

15. ir a atlas refrescar atlas y chequear a la

16. tras la prueba, si funciona comentar "CreateTarea()" ir a "/src/app/page.tsx":

````

export default async function Home() {

//const tarea = await CreateTarea();

  return (

````


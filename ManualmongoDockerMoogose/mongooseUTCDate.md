
https://www.mongodb.com/docs/manual/tutorial/model-iot-data/
var now = new Date();
db.data.insertOne( { date: now,
offset: now.getTimezoneOffset() } );

const{date}=tareaNueva;
   //console.log({date})
   let now = date;

    //console.log({cambioFechaTarea})
await connectToBBDD();

try {


    const{date}=tareaNueva;
   //console.log({date})
   let now = date;

    const tarea = new Tarea(tareaNueva)
    const tareaCreada = await tarea.save({ date: now,
offset: now.getTimezoneOffset() } )
}

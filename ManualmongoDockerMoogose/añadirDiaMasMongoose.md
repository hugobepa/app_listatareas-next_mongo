https://medium.com/@gaelgthomas/add-one-day-to-date-in-javascript-6b7d98b0edce
https://stackoverflow.com/questions/68082141/typescript-changing-variable-value-type

actions.tareas.ts:
````
export const cambiarFecha= async (tareaNuevaN: tareaNueva) =>{
     let {date,...rest} =tareaNuevaN;

     date.setDate(date.getDate()+1)

        return tareaNuevaN;
  
}


export const CreateTarea = async(tareaNueva: tareaNueva) =>{
   
  
const cambioFechaTarea = await cambiarFecha(tareaNueva);

//const tarea = new Tarea(tareaNueva)
    const tarea = new Tarea(cambioFechaTarea)





````


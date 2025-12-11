//http://localhost:3000/tareas/crear
'use server'

import Tarea from "@/models/tareas";
import { connectToBBDD } from "@/utils/database"
import clsx from "clsx";
import { timeStamp } from "console";


export const cambiarFecha= async (tareaNuevaN: tareaNueva) =>{
     let {date,...rest} =tareaNuevaN;

     date.setDate(date.getDate()+1)

        return tareaNuevaN;
  
}



export const CreateTarea = async(tareaNueva: tareaNueva) =>{
    // const tareaNueva ={
    //     titulo: "Leer libro 2",
    //     desc: "Ex eiusmod duis ea tempor veniam aliquip dolor aliqua cupidatat voluptate nulla aliquip quis cupidatat.",
    //   isCompleted: false
    // }
  
    const cambioFechaTarea = await cambiarFecha(tareaNueva);
    //console.log({cambioFechaTarea})
await connectToBBDD();

try {


    //const tarea = new Tarea(tareaNueva)
    const tarea = new Tarea(cambioFechaTarea)
    const tareaCreada = await tarea.save()

    //return tareaCreada
    return JSON.parse(JSON.stringify(tareaCreada))
    
} catch (error) {
    console.log({error})
}

}



export const EditarTarea = async()=>{

    await connectToBBDD();

    try {
        
        const tareaID = '69399fbbebc35309fe419d43'

         const tareaNueva ={
        titulo: "tarea actualizada 2",
        desc: "Ex eiusmod duis ea tempor veniam aliquip dolor aliqua cupidatat voluptate nulla aliquip quis cupidatat.",
      isCompleted: false
    }

        const tareaActualizada = await Tarea.findByIdAndUpdate(tareaID,tareaNueva,{new: true})

        return JSON.parse(JSON.stringify(tareaActualizada))


    } catch (error) {
        console.log({error})
    }
}



export const EliminarTarea = async()=>{

    await connectToBBDD();

    try {
        
        const tareaID = '69399fbbebc35309fe419d43'
  
        const tareaBorrada = await Tarea.findByIdAndDelete(tareaID)
       
        return 'OK'

    } catch (error) {
        console.log({error})
    }
}
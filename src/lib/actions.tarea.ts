'use server'

import Tarea from "@/models/tareas";
import { connectToBBDD } from "@/utils/database"

export const CreateTarea = async() =>{
    const tareaNueva ={
        titulo: "Leer libro 2",
        desc: "Ex eiusmod duis ea tempor veniam aliquip dolor aliqua cupidatat voluptate nulla aliquip quis cupidatat.",
      isCompleted: false
    }


await connectToBBDD();

try {
    const tarea = new Tarea(tareaNueva)
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
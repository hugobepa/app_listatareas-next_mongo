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
   const{date}=tareaNueva;
   //console.log({date})
   let now = date;

    //console.log({now})
await connectToBBDD();

try {


    const tarea = new Tarea(tareaNueva)
    //const tarea = new Tarea(cambioFechaTarea)
 const tareaCreada = await tarea.save({ date: now,
 offset: now.getTimezoneOffset() } )
     //const tareaCreada = await tarea.save( )

    //return tareaCreada
    return JSON.parse(JSON.stringify(tareaCreada))
    
} catch (error) {
    console.log({error})
}

}



export const editarTarea = async(tarea: TareaInterface)=>{

   

    

    await connectToBBDD();

    try {
        
        //console.log(tarea._id);
        const tareaAEditar = await Tarea.findById(tarea._id) as TareaInterface;
       if(!tareaAEditar) return

//         const{date}=tareaAEditar;
//    //console.log({date})
//         let now = date
//         { date: now,
//  offset: now.getTimezoneOffset() }

        const tareaActualizada = await Tarea.findByIdAndUpdate(tareaAEditar._id,tarea,{new: true})

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

export const getTareas = async ()=>{

    await connectToBBDD();
         
    try {
        
        const tareas = await Tarea.find()

          return JSON.parse(JSON.stringify(tareas))
    } catch (error) {
        console.log({error})
        
    }

}


export const getTareasById = async (tareaId:String)=>{

    await connectToBBDD();
         
    try {
        
        const tareas = await Tarea.findById(tareaId)

          return JSON.parse(JSON.stringify(tareas))
    } catch (error) {
        console.log({error})
        
    }

}
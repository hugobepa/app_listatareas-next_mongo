//http://localhost:3000/tareas/crear
'use server'

import Tarea from "@/models/tareas";
import { connectToBBDD } from "@/utils/database"
import clsx from "clsx";
import { timeStamp } from "console";
import { refresh } from "next/cache";
import { revalidatePath } from 'next/cache'


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
     revalidatePath('/')
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

        
//         { date: now,
//  offset: now.getTimezoneOffset() }

        const tareaActualizada = await Tarea.findByIdAndUpdate(tareaAEditar._id,tarea,{new: true})
        
         revalidatePath('/')  
        return JSON.parse(JSON.stringify(tareaActualizada))


    } catch (error) {
        console.log({error})
    }
}



export const borrarTarea = async(tareaId: string)=>{

    await connectToBBDD();

    try {
        
        
  
        const tareaBorrada = await Tarea.findByIdAndDelete(tareaId)

        revalidatePath('/')
       refresh()
        return JSON.parse(JSON.stringify(tareaBorrada))

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
'use server'

import Etiqueta from "@/models/etiqueta";
import { connectToBBDD } from "@/utils/database"
import { refresh, revalidatePath } from 'next/cache'


export const createEtiqueta = async(etiquetaNueva: EtiquetaParams) =>{
    

    //console.log({now})
await connectToBBDD();

try {


    const etiqueta = new Etiqueta(etiquetaNueva)
    //const tarea = new Tarea(cambioFechaTarea)
 const etiquetaCreada = await etiqueta.save()
     //const tareaCreada = await tarea.save( )
     revalidatePath('/etiquetas')
    //return tareaCreada
    return JSON.parse(JSON.stringify(etiquetaCreada))
    
} catch (error) {
    console.log({error})
}

}

//

export const editarEtiqueta = async(etiqueta: EtiquetaInterface)=>{

    await connectToBBDD();

    try {
        
        //console.log(tarea._id);
        const etiquetaAEditar = await Etiqueta.findById(etiqueta._id) as EtiquetaInterface;
       if(!etiquetaAEditar) return

        const etiquetaActualizada = await Etiqueta.findByIdAndUpdate(etiquetaAEditar._id,etiqueta,{new: true})
        
         revalidatePath('/etiquetas')  
        return JSON.parse(JSON.stringify(etiquetaActualizada))


    } catch (error) {
        console.log({error})
    }
}

export const borrarEtiqueta = async(etiquetaId: string)=>{

    await connectToBBDD();

    try {
        
        
  
        const etiquetaBorrada = await Etiqueta.findByIdAndDelete(etiquetaId)

        revalidatePath('/etiqueta')
       refresh()
        return JSON.parse(JSON.stringify(etiquetaBorrada))

    } catch (error) {
        console.log({error})
    }
}

export const getEtiquetas = async ()=>{

    await connectToBBDD();
         
    try {
        
        const etiquetas = await Etiqueta.find()

          return JSON.parse(JSON.stringify(etiquetas))
    } catch (error) {
        console.log({error})
        
    }

}
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
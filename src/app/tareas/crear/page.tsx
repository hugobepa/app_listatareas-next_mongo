'use client'

import { Button } from "@/components/ui/button"
import { CreateTarea, EditarTarea, EliminarTarea } from "@/lib/actions.tarea"




export const CrearTareaspage = () => {

    async function handleCrear(){
        const tarea =await CreateTarea()
    }

     async function handleEditar(){
        const tarea =await EditarTarea()
    }

     async function handleEliminar(){
        const tarea =await EliminarTarea()
    }

  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-[url('/assets/images/grid.png')]">




      <Button
              variant="outline"
              onClick={handleCrear}
            >
              Crear tarea
            </Button>

         <Button
              variant="outline"
              onClick={handleEditar}
            >
              Editar tarea
            </Button>
    
         <Button
              variant="outline"
              onClick={handleEliminar}
            >
              Eliminar tarea
            </Button>

    </main>
  )
}

export default CrearTareaspage

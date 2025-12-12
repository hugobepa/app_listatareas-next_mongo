'use client'


import FormularioTareaNueva from "@/components/formularioTareaNueva"
import { Button } from "@/components/ui/button"
import { getEtiquetas } from "@/lib"
import { CreateTarea, editarTarea,} from "@/lib/actions.tarea"





export const CrearTareaspage = () => {

   

  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-[url('/assets/images/grid.png')]">

      <FormularioTareaNueva 
       type='crear'
      
       />


    

    </main>
  )
}

export default CrearTareaspage

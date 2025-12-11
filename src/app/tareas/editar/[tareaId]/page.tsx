


import FormularioTareaNueva from "@/components/formularioTareaNueva"
import {  getTareasById } from "@/lib/actions.tarea"


interface Props {
   
   
 params: Promise<{ tareaId: string }>
 //searchParams: Promise<{ [key: string]: string | string[] | undefined }>
 searchParams: Promise<{ [key: string]: string | undefined }>
}


export const EditarTareaspage = async ({params}:Props) => {
    
    const { tareaId } = await params;
      
    const tarea = await getTareasById(tareaId)   
    //console.log({tareaId})


    // async function handleCrear(){
    //     const tarea =await CreateTarea()
    // }

    //  async function handleEditar(){
    //     const tarea =await EditarTarea()
    // }

    //  async function handleEliminar(){
    //     const tarea =await EliminarTarea()
    // }

  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-[url('/assets/images/grid.png')]">
     <h1>Editar tarea</h1>
      <FormularioTareaNueva 
            type='editar'
            data={tarea}
      />


    

    </main>
  )
}

export default EditarTareaspage

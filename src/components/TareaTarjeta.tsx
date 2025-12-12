'use client'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { CheckIcon, CircleCheckIcon, CircleIcon, Pencil, PencilIcon, Trash2, Trash2Icon } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { useRouter } from "next/navigation";
import { borrarTarea, completarTarea } from "@/lib/actions.tarea";
import { refresh } from "next/cache";

interface Props {

  tarea: TareaInterface
  etiquetas: EtiquetaInterface[]

 

}

export const TareaTarjeta = ({ tarea,etiquetas }: Props) => {
  const router = useRouter();

  const [completed, setCompleted] = useState(tarea.isCompleted)
  const [etiqueta, setEtiqueta] = useState<string>()

  const handleClick = () => {
    setCompleted((prevState => !prevState))
  }

  function handleEdit() {
    router.push(`/tareas/editar/${tarea._id}`)
  }

  async function handleDelete() {
    if (tarea._id) {
      const tareaBorrada = await borrarTarea(tarea._id as string)
    }
  }


  async function handleComplete() {

    if (tarea._id) {
      const tareaActualizada = await completarTarea(tarea._id as string)

      setCompleted((prevState) => !prevState)
    }


  }


  useEffect(() => {
    const etiquetaSeleccionada = etiquetas.find((etiqueta)=> etiqueta._id === tarea.etiquetaId) 

    if(etiquetaSeleccionada){
         setEtiqueta(etiquetaSeleccionada.nombre)
    }

  }, [etiquetas,tarea])
  


  return (
    <Card className="w-[320px]">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800">{tarea.titulo}

          <Separator className="mt-2" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{tarea.desc}</p>
      </CardContent>
      <CardFooter className="flex flex-col pb-0">
        <Separator className="m-2" />

        <div className="flex w-full">
          <p className="text-sm bg-gray-200 text-gray-800 rounded-full px-4">
            {etiqueta}
          </p>
          
        </div>

        <div className="flex justify-between items-center w-full">

          <p className="text-sm text-gray-600">{tarea.date.toString().substring(0, 10)}</p>


          <div className="flex justify-end gap-8 w-full my-2 py-2">
            <PencilIcon className="text-gray-400 hover:text-blue-600 cursor-pointer "
              onClick={handleEdit}
              size={20} />
            <Trash2Icon className="text-gray-400 hover:text-red-600 cursor-pointer"
              onClick={handleDelete}
              size={20} />

            {completed ? (
              <CircleCheckIcon className='text-green-700' />
            ) : (
               <CircleIcon
               onClick={handleComplete}
               className='text-gray-400 hover:text-green-700  cursor-pointer' />
              
            )}


          </div>





        </div>




      </CardFooter>
    </Card>
  )
}

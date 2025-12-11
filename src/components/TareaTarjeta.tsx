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
import { useState } from "react";
import { CheckIcon, Pencil, PencilIcon, Trash2, Trash2Icon } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { useRouter } from "next/navigation";
import { borrarTarea } from "@/lib/actions.tarea";
import { refresh } from "next/cache";

interface Props {
  _id?: string | undefined;
  titulo: string;
  desc: string;
  date: string | Date;
  isCompleted: boolean;

}

export const TareaTarjeta = ({ _id,titulo, desc, date, isCompleted }: Props) => {
  const  router = useRouter();

  const [completed, setCompleted] = useState(isCompleted)

  const handleClick = () => {
    setCompleted((prevState => !prevState))
  }

   function handleEdit(){
       router.push(`/tareas/editar/${_id}`)
   }

   async function handleDelete(){
       if(_id){
        const tareaBorrada = await borrarTarea(_id as string)
       }
       
       
   }

  return (
    <Card className="w-[320px]">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800">{titulo}

          <Separator className="mt-2" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{desc}</p>
      </CardContent>
      <CardFooter className="flex flex-col ">
        <Separator className="m-2" />

        <div className="flex justify-between items-center w-full">

          <p className="text-sm text-gray-600">{date.toString().substring(0,10)}</p>


          {completed ? (
            <CheckIcon className='text-green-700' />
          ) : (
            <Button
              variant="outline"
              onClick={handleClick}
            >
              Completar
            </Button>
          )}

        </div>

        <div className="flex justify-end gap-8 w-full my-2 py-2">
          <PencilIcon className="text-gray-400 hover:text-blue-600 cursor-pointer "  
          onClick={handleEdit}
          size={20}/>
          <Trash2Icon className="text-gray-400 hover:text-red-600 cursor-pointer"
           onClick={handleDelete}
          size={20}/>
        </div>


      </CardFooter>
    </Card>
  )
}

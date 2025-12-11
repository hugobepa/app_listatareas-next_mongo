import { TareaTarjeta } from "@/components/TareaTarjeta";
import { tareas } from "@/contants";
import { CreateTarea, getTareas } from "@/lib/actions.tarea";
import Image from "next/image";

export default async function Home() {

const tareas =await getTareas() as TareaInterface[]


  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-[url('/assets/images/grid.png')]">
      <div className="flex flex-col gap-4 items-center max-w-screen-sm mb-16">
        <h1 className="text-4xl font-semibold text-gray-900 drop-shadow-xl">OrganizaYa</h1>
        <p className="text-gray-600 text-center">Gestionar tus tareas de forma eficiente</p>
      </div>

      <section className="grid grid-cols-1 l:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-5xl">

        {
          tareas.map((tarea,index)=>(
          <TareaTarjeta 
          key={tarea._id} 
          titulo={tarea.titulo} 
          desc={tarea.desc}
           date={tarea.date} 
           isCompleted={tarea.isCompleted}          
          />
        ))
        }
        

      </section>
    </main>
  );
}

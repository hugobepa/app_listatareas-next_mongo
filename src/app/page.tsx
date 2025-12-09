import { TareaTarjeta } from "@/components/TareaTarjeta";
import { tareas } from "@/contants";
import Image from "next/image";

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-[url('/assets/images/grid.png')]">
      <div className="flex flex-col gap-4 items-center max-w-screen-sm mb-16">
        <h1 className="text-4xl font-semibold text-gray-900 drop-shadow-xl">OrganizaYa</h1>
        <p className="text-gray-600 text-center">Gestionar tus tareas de forma eficiente</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">

        {
          tareas.map(tarea=>(
          <TareaTarjeta key={tarea.titulo} 
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

import FormularioEtiquetas from "@/components/FormularioEtiquetas"


const etiquetasPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center  p-24 bg-[url('/assets/images/grid.png')]">
        <div className="flex flex-col w-full justify-start">
             <h1 className="text-2xl font-semibold mb-4">Etiquetas</h1>
        </div>
       
        <FormularioEtiquetas type={"crear"}/>
    </div>


   
  )
}

export default etiquetasPage
import EtiquetaTarjeta from "@/components/EtiquetaTarjeta"
import FormularioEtiquetas from "@/components/FormularioEtiquetas"
import { Separator } from "@/components/ui/separator"
import { getEtiquetas } from "@/lib/actions.etiqueta";


const etiquetasPage = async () => {

const etiquetas:EtiquetaInterface[] = await getEtiquetas();  //as EtiquetaInterface[]


  return (
    <div className="flex min-h-screen flex-col items-center  p-24 bg-[url('/assets/images/grid.png')]">
        <div className="flex flex-col w-full justify-start">
             <h1 className="text-2xl font-semibold mb-4">Etiquetas</h1>
              <FormularioEtiquetas type={"crear"}/>
        </div>
       <Separator className="my-5"/>

        <div className="flex flex-wrap gap-6">
          {
            etiquetas.map((etiqueta)=>(
             <EtiquetaTarjeta key={etiqueta._id} etiqueta={etiqueta}/>
            ))
          }

        </div>

        <Separator className="my-5"/>

        <p className="text-gray-400">{etiquetas.length} etiquetas</p>

    </div>
  )
}

export default etiquetasPage
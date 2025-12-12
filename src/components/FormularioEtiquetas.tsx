//https://ui.shadcn.com/docs/components/form
//https://www.youtube.com/watch?v=b0Bd8d6KEeY caledar don't closed
'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createEtiqueta, editarEtiqueta } from "@/lib/actions.etiqueta"
import { useRouter } from "next/navigation"






const formSchema = z.object({
    _id: z.string().optional(),
    nombre: z.string().min(2),
    
})

interface Props {
    type: 'crear' | 'editar'
    data?: EtiquetaInterface
}


const FormularioEtiquetas = ({ type, data }: Props) => {

    const router = useRouter()

    const etiquetasDefaultValues = {
        nombre: ""
    }

    const etiquetasEditarValues = {
        _id: data?._id,
        nombre: data?.nombre,
    }


    const initialValues = data && type === 'editar' ? etiquetasEditarValues : etiquetasDefaultValues;

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log({ values })

        try {

            if (type === 'crear') {
                const etiquetaNueva = await createEtiqueta(values);

                if (etiquetaNueva) {
                    form.reset();
                }
            }


             if (type === 'editar') {
                const etiquetaActualizada = await editarEtiqueta(values);

                if (etiquetaActualizada) {
                    form.reset();
                }
            }



        } catch (error) {
            console.log(error)
        }
    }



    return (


        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white border rounded-md p-4 space-y-8">
                <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre de Etiqueta</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

            
                <Button
                className="bg-blue-700"
                type="submit">Crear</Button>
            </form>
        </Form>


    )
}

export default FormularioEtiquetas
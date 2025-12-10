//https://ui.shadcn.com/docs/components/form
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
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"





const formSchema = z.object({
    titulo: z.string().min(2),
    desc: z.string(),
    date: z.date(),
    isCompleted: z.boolean(),
})

const FormularioTareaNueva = () => {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            titulo: "",
            desc:"",
            date: new Date(),
            isCompleted: false,

        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log({values})
    }


    return (
        

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="titulo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Titulo</FormLabel>
                                <FormControl>
                                    <Input placeholder="hacer las compras" {...field} />
                                </FormControl>                            
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                     <FormField
                        control={form.control}
                        name="desc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>descripcion</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>                            
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                     <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fecha a completar</FormLabel>
                                <FormControl>
                                    {/* <Input placeholder="hacer las compras" {...field} /> */}
                                </FormControl>                            
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                     <FormField
                        control={form.control}
                        name="isCompleted"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Completado</FormLabel>
                                <FormControl>
                                   <Checkbox 
                                   checked={field.value}
                                   onCheckedChange={field.onChange}
                                   />                                  
                                </FormControl>                            
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    


                    <Button type="submit">Submit</Button>
                </form>
            </Form>

        
    )
}

export default FormularioTareaNueva
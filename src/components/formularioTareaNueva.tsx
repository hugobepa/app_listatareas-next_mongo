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
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { CreateTarea, editarTarea } from "@/lib/actions.tarea"
import { useRouter } from "next/navigation"






const formSchema = z.object({
    _id: z.string().optional(),
    titulo: z.string().min(2),
    desc: z.string(),
    date: z.date(),
    isCompleted: z.boolean(),
})

interface Props {
    type: 'crear' | 'editar'
    data?: TareaInterface
}


const FormularioTareaNueva = ({ type, data }: Props) => {

    const router = useRouter()

    const [date, setDate] = useState<Date>()
    const [open, setOpen] = useState(false)



    const tareaDefaultValues = {
        titulo: "",
        desc: "",
        date: new Date(),
        isCompleted: false,

    }

    const tareaEditarValues = {
        _id: data?._id,
        titulo: data?.titulo,
        desc: data?.desc,
        date: data?.date ? new Date(data?.date) : new Date(),
        isCompleted: data?.isCompleted,

    }


    const initialValues = data && type === 'editar' ? tareaEditarValues : tareaDefaultValues;

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
                const tareaNueva = await CreateTarea(values);

                if (tareaNueva) {
                    router.push('/');
                    form.reset();
                }
            }


             if (type === 'editar') {
                const tareaActualizada = await editarTarea(values);

                if (tareaActualizada) {
                    router.push('/');
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

                {/* <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Fecha a completar</FormLabel>
                            <FormControl>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                             data-empty={!date}
                                            className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
                                            
                                        
                                        >
                                            <CalendarIcon />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar 
                                        mode="single" 
                                        //selected={date} onSelect={setDate}
                                         selected={field.value } 
                                         onSelect={field.onChange}
                                        // onSelect={(newValue)=>{
                                        //     setDate(newValue)
                                        //     setOpen(false);
                                        //     field.onChange
                                        // }}
                                         />
                                    </PopoverContent>
                                </Popover>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                /> */}



                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-2'>
                            <FormLabel>Fecha a Completar</FormLabel>
                            <FormControl>

                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[280px] justify-start text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            onDayClick={(newValue) => {
                                                setDate(newValue)
                                                setOpen(false);

                                            }}

                                        />
                                    </PopoverContent>
                                </Popover>

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />




                <FormField
                    control={form.control}
                    name="isCompleted"
                    render={({ field }) => (
                        <FormItem className="flex items-center gap-4">
                            <FormLabel>tarea Completada</FormLabel>
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
//https://www.youtube.com/watch?v=b0Bd8d6KEeY caledar don't closed
//https://ui.shadcn.com/docs/components/date-picker


const [date, setDate] = useState<Date>()
const [open, setOpen] = useState(false)



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
                        onDayClick={(newValue)=>{
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


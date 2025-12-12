import { model, models, Schema } from "mongoose";





const TareaSchema =new Schema(
    {

        titulo:{
            type: String,
            required: true
        },
        desc:{
            type: String,
        },
        date:{
            type:Date,
            default:new Date(),      
        },
        isCompleted:{
            type:Boolean,
        },
          etiquetaId:{
            type: Schema.Types.ObjectId,
            ref: 'Etiqueta',
        },

    })

    const Tarea = models?.Tarea || model('Tarea',TareaSchema)

    export default Tarea
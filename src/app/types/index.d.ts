

//TAREAS
declare type tareaNueva =
    {

        titulo:string;
        desc:string;
        date:Date;
        isCompleted:boolean;

    }

declare type TareaInterface =
    {
        _id?:string | undefined;
        titulo:string;
        desc:string;
        date:string | Date;
        isCompleted:boolean;

    }

declare type EtiquetaInterface =
    {
        _id?:string;
        nombre:string;
    }

declare type EtiquetaParams =
    {
        nombre:string;
    }    


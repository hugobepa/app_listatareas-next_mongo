'use client'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

interface Props {
  titulo: string;
  desc: string;
  date: string; //date: Date;
  isCompleted: boolean;

}

export const TareaTarjeta = ({ titulo, desc, date, isCompleted }: Props) => {

  const [completed, setCompleted] = useState(isCompleted)

  const handleClick = () => {
    setCompleted((prevState => !prevState))
  }

  return (
    <Card className="w-[320px]">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800">{titulo}

          <Separator className="mt-2" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{desc}</p>
      </CardContent>
      <CardFooter className="flex flex-col ">
        <Separator className="m-2" />

        <div className="flex justify-between items-center w-full">

          <p className="text-sm text-gray-600">{date.substring(0,10)}</p>


          {completed ? (
            <CheckIcon className='text-green-700' />
          ) : (
            <Button
              variant="outline"
              onClick={handleClick}
            >
              Completar
            </Button>
          )}

        </div>




      </CardFooter>
    </Card>
  )
}

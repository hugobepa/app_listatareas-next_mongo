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

interface Props{
    titulo: string;
    desc: string;
    date: Date;
    isCompleted: boolean;

}

export const TareaTarjeta = ({titulo,desc,date,isCompleted}:Props) => {
  return (
   <Card>
  <CardHeader>
    <CardTitle className="text-xl text-gray-800">{titulo}</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-gray-600">{desc}</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <p className="text-sm text-gray-600">{date.toDateString()}</p>
    <Button variant="outline">button</Button>
  </CardFooter>
</Card>
  )
}

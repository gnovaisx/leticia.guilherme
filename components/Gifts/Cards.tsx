import pratos from "@/public/pratos.jpg";
import { IGiftCards } from "@/types/IGiftCards";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function GiftCards({ id, title, price, image }: IGiftCards) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={pratos} alt="pratos" className="w-full" />
        <CardDescription className="text-center pt-4">
          R${price}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href={`/presentes/${id}`}>
          <Button className="w-full">Presentear</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

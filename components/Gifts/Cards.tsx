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
        <div className="w-[300px] h-[300px]">
          <Image
            src={image}
            alt="pratos"
            width={100}
            height={100}
            className="w-full h-full object-fill"
          />
        </div>
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

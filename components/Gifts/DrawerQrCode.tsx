import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "../ui/badge";
import PixClipboard from "./PixClipboard";

interface IDrawerQrCode {
  params: {
    price: number;
    name: string;
  };
}

export function DrawerQrCode({ params }: IDrawerQrCode) {
  const { price, name } = params;
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full">Enviar via PIX</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{name}</DrawerTitle>
            <DrawerDescription>
              Efetua a compra de suas cotas via PIX
            </DrawerDescription>
          </DrawerHeader>
          <div>
            <p>{price}</p>
            <div className="flex flex-wrap gap-2 justify-center items-center">
              <Badge variant="secondary">
                guilherme.novais.leite@gmail.com
              </Badge>
              <PixClipboard />
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Já enviei!</Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button variant="outline">Quero alterar o valor</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

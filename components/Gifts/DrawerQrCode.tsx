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
import QrCode from "@/public/qrcode.png";
import useGiftStore from "@/store/gift-state";
import Image from "next/image";
import { Badge } from "../ui/badge";
import PixClipboard from "./PixClipboard";

interface IDrawerQrCode {
  name: string;
}

export function DrawerQrCode({ name }: IDrawerQrCode) {
  const { priceChanged } = useGiftStore();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full">Enviar via PIX</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-center text-3xl">{name}</DrawerTitle>
            <DrawerDescription className="text-center">
              Clique no ícone para copiar o código e enviar o valor desejado via
              PIX!
            </DrawerDescription>
          </DrawerHeader>
          <div>
            <p className="text-center text-2xl mb-2">
              R$ {priceChanged.toFixed(2)}
            </p>
            <Image
              src={QrCode}
              alt="qr-code"
              height="200"
              className="mx-auto mb-3"
            />
            <div className="flex flex-wrap gap-1 judstify-center items-center mx-auto">
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

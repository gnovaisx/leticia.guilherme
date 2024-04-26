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
            <p className="text-center text-2xl">R$ {priceChanged.toFixed(2)}</p>
          </DrawerHeader>
          <div>
            <DrawerDescription className="text-center mb-2">
              Abra seu aplicativo do banco e leia o QR Code:
            </DrawerDescription>
            <Image
              src={QrCode}
              alt="qr-code"
              height="200"
              className="mx-auto mb-3"
            />
            <div className="px-4">
              <DrawerDescription className="text-center mb-2">
                Clique no botão a seguir para copiar o código PIX e colar na
                área PIX do seu banco.
              </DrawerDescription>
              <p className="text-center font-bold bg-slate-200 rounded-md mb-2">
                guilherme.novais.leite@gmail.com
              </p>
              <PixClipboard />
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button className="w-full">Já enviei!</Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Quero alterar o valor
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

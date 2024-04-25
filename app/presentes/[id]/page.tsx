"use client";
import { DrawerQrCode } from "@/components/Gifts/DrawerQrCode";
import PriceButtons from "@/components/Gifts/PriceButtons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import giftCardsData from "@/lib/data";
import pratos from "@/public/pratos.jpg";
import Image from "next/image";

interface IGiftDetails {
  params: {
    key: number;
    id: number;
  };
}
export default function GiftDetails({ params }: IGiftDetails) {
  const { id } = params;

  const giftSelected = giftCardsData.find((gift) => gift.id == id);

  return (
    <div className="w-[90%] m-auto p-8">
      <div className="h-[40px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/presentes">Presentes</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{giftSelected?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mt-4 flex flex-col items-center lg:items-start">
        <div className="text-3xl font-bold tracking-tighter sm:text-4xl">
          {giftSelected?.title}
        </div>
        <div className="flex items-center">
          <div className="mt-10 lg:mt-6 lg:col-start-2 lg:row-start-2 lg:self-center flex flex-col lg:flex-row gap-4">
            <div className="h-[350px] lg:h-[600px]">
              <Image
                src={pratos}
                alt="pratos"
                className="rounded-md object-cover h-full w-full"
              />
            </div>

            <div className="">
              <p className="text-center mb-2">R$ {giftSelected?.price}/cota</p>
              <PriceButtons params={{ price: giftSelected?.price ?? 9.99 }} />
              <DrawerQrCode params={{ price: 1, name: "teste" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

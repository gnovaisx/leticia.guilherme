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
    <div className="w-[90%] m-auto p-2">
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
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <div className="h-[350px] lg:h-[600px]">
            <Image
              src={giftSelected ? giftSelected.image : "/gifts/presente.jpg"}
              alt="pratos"
              className="rounded-md object-cover h-full w-full"
              width={100}
              height={100}
            />
          </div>
          <div className="lg:flex lg:flex-col items-center justify-center">
            <p className="text-center mb-2">R$ {giftSelected?.price}/cota</p>
            <PriceButtons params={{ price: giftSelected?.price ?? 99.99 }} />
            <DrawerQrCode name={giftSelected?.title ?? ""} />
          </div>
        </div>
      </div>
    </div>
  );
}

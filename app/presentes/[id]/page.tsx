"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import giftCardsData from "@/lib/data";
import pratos from "@/public/pratos.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IGiftDetails {
  params: {
    key: number;
    id: number;
  };
}
export default function GiftDetails({ params }: IGiftDetails) {
  const { id } = params;

  const giftSelected = giftCardsData.find((gift) => gift.id == id);

  const [quantity, setQuantity] = useState<any>([1]);
  const [price, setPrice] = useState(9.99);

  useEffect(() => {
    if (giftSelected) {
      setPrice(Number((giftSelected.price * quantity).toFixed(2)));
    }
  }, [giftSelected, quantity]);

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
              <p className="text-center">R$ {price}</p>
              <Button className="w-full">Envie</Button>
              <Slider
                defaultValue={quantity}
                min={1}
                step={1}
                onValueChange={setQuantity}
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

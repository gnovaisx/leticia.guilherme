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
import giftCardsData from "@/lib/data";

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
      <div className="flex flex-wrap gap-8 items-center">
        <div>{giftSelected?.title}</div>
        <div>
          <div>{giftSelected?.price}</div>
          <Button>Teste</Button>
        </div>
      </div>
    </div>
  );
}

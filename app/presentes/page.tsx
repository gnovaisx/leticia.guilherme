import GiftCards from "@/components/Gifts/Cards";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import giftCardsData from "@/lib/data";

export default function Presentes() {
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
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {giftCardsData.map((gift) => {
          return (
            <GiftCards
              key={gift.id}
              id={gift.id}
              title={gift.title}
              price={gift.price}
              image={gift.image}
              isDisabled={gift.isDisabled}
            />
          );
        })}
      </div>
    </div>
  );
}

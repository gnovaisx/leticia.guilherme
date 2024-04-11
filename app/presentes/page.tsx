import GiftCards from "@/components/Gifts/Cards";
import giftCardsData from "@/lib/data";

export default function Presentes() {
  return (
    <div className="w-[90%] m-auto p-8">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {giftCardsData.map((gift) => {
          return (
            <GiftCards
              key={gift.id}
              id={gift.id}
              title={gift.title}
              price={gift.price}
              image={gift.image}
            />
          );
        })}
      </div>
    </div>
  );
}

"use client";
import giftCardsData from "@/lib/data";

interface IGiftDetails {
  params: {
    id: number;
  };
}
export default function GiftDetails({ params }: IGiftDetails) {
  const { id } = params;

  console.log("id >>", id);

  console.log("data >>", giftCardsData);

  return (
    <div className="w-[90%] m-auto p-8">
      <>
        {giftCardsData.map((gift) => {
          if (gift.id == id) {
            return <>{gift.title}</>;
          }
        })}
      </>
    </div>
  );
}

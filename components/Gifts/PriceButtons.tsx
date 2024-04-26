import useGiftStore from "@/store/gift-state";
import { Minus, Plus } from "lucide-react";
import { useEffect } from "react";
import { Button } from "../ui/button";

interface IPriceButtons {
  params: {
    price: number;
  };
}

export default function PriceButtons({ params }: IPriceButtons) {
  const { price } = params;
  const { priceChanged, resetPrice, addPriceByQuota, subPriceByQuota } =
    useGiftStore();

  useEffect(() => {
    resetPrice(price);
  }, [price]);

  return (
    <div className="flex items-center justify-center space-x-2 mb-2">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 shrink-0 rounded-full"
        onClick={() => subPriceByQuota(-price)}
        disabled={priceChanged <= price}
      >
        <Minus className="h-4 w-4" />
        <span className="sr-only">Diminuir</span>
      </Button>
      <div className="flex-1 text-center">
        <div className="text-5xl font-bold tracking-tighter">
          R$ {priceChanged.toFixed(2)}
        </div>
        <div className="text-[0.70rem] uppercase text-muted-foreground">
          Valor das cotas
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 shrink-0 rounded-full"
        onClick={() => addPriceByQuota(price)}
      >
        <Plus className="h-4 w-4" />
        <span className="sr-only">Aumentar</span>
      </Button>
    </div>
  );
}

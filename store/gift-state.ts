import { create } from "zustand";

interface IGiftState {
  priceChanged: number;
  handlePriceChanged: (value: number) => void;
}

const useGiftStore = create<IGiftState>()((set) => ({
  priceChanged: 9.99,
  handlePriceChanged: (value) =>
    set((state) => ({ priceChanged: state.priceChanged + value })),
}));
export default useGiftStore;

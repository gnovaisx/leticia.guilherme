import { create } from "zustand";

interface IGiftState {
  priceChanged: number;
  resetPrice: (value: number) => void;
  addPriceByQuota: (value: number) => void;
  subPriceByQuota: (value: number) => void;
}

const useGiftStore = create<IGiftState>()((set) => ({
  priceChanged: 99.99,
  resetPrice: (value) => set({ priceChanged: value }),
  addPriceByQuota: (value) =>
    set((state) => ({ priceChanged: state.priceChanged + value })),
  subPriceByQuota: (value) =>
    set((state) => ({ priceChanged: state.priceChanged + value })),
}));
export default useGiftStore;

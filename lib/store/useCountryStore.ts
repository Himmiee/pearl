import { create } from "zustand";

interface CountryState {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}

const useCountryStore = create<CountryState>((set) => ({
  selectedCountry: "Nigeria", // Default value
  setSelectedCountry: (country) => set({ selectedCountry: country }),
}));

export default useCountryStore;

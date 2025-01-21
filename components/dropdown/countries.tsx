// "use client";

// import { useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const countries = [
//   { id: "1", name: "Nigeria", emoji: "🇳🇬" },
//   { id: "2", name: "United Kingdom", emoji: "🇬🇧" },
// ];

// export default function CountryDropdown() {
//   const [selectedCountry, setSelectedCountry] = useState<string>("Nigeria");

//   console.log(selectedCountry);

//   return (
//     <div className="w-[4rem] flex justify-center items-center">
//       <Select value={selectedCountry} onValueChange={setSelectedCountry}>
//         <SelectTrigger className="w-full">
//           <SelectValue placeholder="Select a country">
//             {
//               countries.find((country) => country.name === selectedCountry)
//                 ?.emoji
//             }
//           </SelectValue>
//         </SelectTrigger>
//         <SelectContent>
//           {countries.map((country) => (
//             <SelectItem key={country.id} value={country.name}>
//               <span className="text-2xl">{country.emoji}</span>
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }
"use client";

// import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCountryStore from "@/lib/store/useCountryStore";
// import useCountryStore from "@/stores/countryStore"; // Import the Zustand store

const countries = [
  { id: "1", name: "Nigeria", emoji: "🇳🇬" },
  { id: "2", name: "United Kingdom", emoji: "🇬🇧" },
];

export default function CountryDropdown() {
  const { selectedCountry, setSelectedCountry } = useCountryStore();

  console.log("Selected Country:", selectedCountry);

  return (
    <div className="w-[4rem] flex justify-center items-center">
      <Select value={selectedCountry} onValueChange={setSelectedCountry}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a country">
            {
              countries.find((country) => country.name === selectedCountry)
                ?.emoji
            }
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem key={country.id} value={country.name}>
              <span className="text-2xl">{country.emoji}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

import React from "react";
import { Input } from "@/components/ui/input";

interface InputFileProps {
  onChange: (file: File | null) => void; // Pass the selected file or null
}

export function InputFile({ onChange }: InputFileProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file); // Pass the file or null
  };

  return (
    <div className="grid w-full items-center gap-1.5">
      <Input
        id="formDocument"
        type="file"
        onChange={handleFileChange} // Extract the file and pass it
        className="w-full h-[48px] pt-3"
      />
    </div>
  );
}

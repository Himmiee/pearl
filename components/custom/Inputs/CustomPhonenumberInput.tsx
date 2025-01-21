import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core";
import "react-phone-number-input/style.css";

type CustomPhonenumberInputProps = {
  value: E164Number | undefined;
  onChange: (value: E164Number | undefined) => void;
  className?: string;
};

const CustomPhonenumberInput = ({
  value,
  onChange,
  className,
}: CustomPhonenumberInputProps) => {
  return (
    <PhoneInput
      defaultCountry="US"
      placeholder="Enter phone number"
      international
      withCountryCallingCode
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default CustomPhonenumberInput;

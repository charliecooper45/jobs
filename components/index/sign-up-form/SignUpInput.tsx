import { Input } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import { SignUpValues } from ".";

type SignUpProps = {
  register: UseFormRegister<SignUpValues>;
  name: "email" | "password" | "confirmPassword";
  placeholder: string;
  isPassword?: boolean;
  mt?: string;
};

const SignUpInput = ({
  register,
  mt = "0",
  name,
  isPassword = false,
  placeholder,
}: SignUpProps) => {
  return (
    <Input
      {...register(name)}
      id={name}
      placeholder={placeholder}
      backgroundColor="rgba(255, 255, 255, 0.1)"
      border="none"
      borderRadius="65px"
      color="brand.white"
      focusBorderColor="brand.white"
      mt={mt}
      textAlign="center"
      type={isPassword ? "password" : "text"}
      _placeholder={{ color: "#8E80A5" }}
    />
  );
};

export default SignUpInput;

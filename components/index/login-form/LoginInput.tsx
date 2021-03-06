import { Input } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import { LoginFormValues } from ".";

type LoginInputProps = {
  register: UseFormRegister<LoginFormValues>;
  name: "email" | "password";
  placeholder: string;
  isPassword?: boolean;
  mt?: string;
};

const LoginInput = ({
  register,
  name,
  placeholder,
  isPassword = false,
  mt = "0",
}: LoginInputProps) => {
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

export default LoginInput;

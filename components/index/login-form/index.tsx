import { Button, FormControl, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginInput from "./LoginInput";

export type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({});
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormValues> = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        router.push("/dashboard");
        resolve();
      }, 3000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl mt="40px">
        <LoginInput
          name="email"
          placeholder="email address"
          register={register}
        />
        <LoginInput
          mt="15px"
          name="password"
          placeholder="password"
          register={register}
        />
        <Text
          cursor="pointer"
          fontSize="0.75rem"
          mt="10px"
          textAlign="center"
          textDecoration="underline"
        >
          Forgot your password?
        </Text>
      </FormControl>
      <Button
        isDisabled={isSubmitting}
        isLoading={isSubmitting}
        type="submit"
        backgroundColor="brand.white"
        borderRadius="65px"
        color="brand.ultramarine"
        height="40px"
        mt="30px"
        width="100%"
        _hover={{
          backgroundColor: "brand.white",
          color: "brand.magenta",
        }}
        _focus={{
          backgroundColor: "brand.white",
          color: "brand.magenta",
        }}
      >
        Login
      </Button>
      <Button
        background="linear-gradient(90deg, #6E3AFF 0%, #F009FE 100%);"
        borderRadius="65px"
        color="brand.white"
        height="40px"
        mt="10px"
        type="button"
        width="100%"
        _hover={{
          background: "linear-gradient(90deg, #D509FB 0%, #F009FE 100%);",
        }}
        _focus={{
          background: "linear-gradient(90deg, #D509FB 0%, #F009FE 100%);",
        }}
      >
        Sign up
      </Button>
    </form>
  );
};

export default LoginForm;

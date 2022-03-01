import { Button, FormControl, SlideFade } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import SignUpInput from "./SignUpInput";

type SignUpFormProps = {
  onToggleLogin: (isLogin: boolean) => void;
};

export type SignUpValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = ({ onToggleLogin }: SignUpFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<SignUpValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpValues> = () => {
    return new Promise<void>(() => {
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    });
  };

  return (
    <SlideFade in offsetY="50px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mt="40px" w="419px">
          <SignUpInput
            name="email"
            placeholder="email address"
            register={register}
          />
          <SignUpInput
            mt="15px"
            name="password"
            placeholder="password"
            isPassword
            register={register}
          />
          <SignUpInput
            mt="15px"
            name="confirmPassword"
            placeholder="confirm password"
            isPassword
            register={register}
          />
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
            Sign Up
          </Button>
          <Button
            onClick={() => onToggleLogin(true)}
            background="linear-gradient(90deg, #6E3AFF 0%, #F009FE 100%)"
            borderRadius="65px"
            color="brand.white"
            height="40px"
            mt="10px"
            type="button"
            width="100%"
            _hover={{
              background: "linear-gradient(90deg, #D509FB 0%, #F009FE 100%)",
            }}
            _focus={{
              background: "linear-gradient(90deg, #D509FB 0%, #F009FE 100%);",
            }}
          >
            Go Back
          </Button>
        </FormControl>
      </form>
    </SlideFade>
  );
};

export default SignUpForm;

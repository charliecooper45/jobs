import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { Job, Skill } from "@prisma/client";
import { MouseEventHandler } from "react";
import { useForm } from "react-hook-form";
import Heading from "../Heading";
import EditJobDropdown from "./EditJobDropdown";
import EditJobInput from "./EditJobInput";
import EditJobSkills from "./EditJobSkills";

type EditJobProps = {
  job: Job & {
    skills: Skill[];
  };
  onClose: MouseEventHandler;
};

export type EditJobFormValues = {
  title: string;
  company: string;
  jobUrl: string | null;
  companyUrl: string | null;
  status: string;
};

const EditJobForm = ({ job, onClose }: EditJobProps) => {
  const { title, company, jobUrl, companyUrl, status, skills } = job;
  const { register } = useForm<EditJobFormValues>({
    defaultValues: {
      title,
      company,
      jobUrl,
      companyUrl,
      status,
    },
  });

  const handleClick: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <Flex
      onClick={handleClick}
      background="linear-gradient(133.62deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"
      boxShadow="0px 10px 50px rgba(0, 0, 0, 0.1)"
      borderRadius="20px"
      h="90vh"
      maxW="1200px"
    >
      <Flex flex="1" flexDir="column" p="40px 20px 40px 40px">
        <Heading color="brand.white" marginLeft="10px" text="Job Title" />
        <EditJobInput name="title" register={register} />
        <Heading color="brand.white" marginLeft="10px" text="Company" />
        <EditJobInput name="company" register={register} />
        <Heading color="brand.white" marginLeft="10px" text="Skills" />
        <EditJobSkills skills={skills} />
        <Heading color="brand.white" marginLeft="10px" text="Website" />
        <EditJobInput name="companyUrl" register={register} />
        <Heading color="brand.white" marginLeft="10px" text="Job Spec" />
        <EditJobInput name="jobUrl" register={register} />
        <Spacer flex="1" />
        <Flex mt="30px">
          <Button
            onClick={onClose}
            backgroundColor="brand.white"
            borderRadius="65px"
            color="brand.ultramarine"
            h="40px"
            w="100px"
            _hover={{
              backgroundColor: "brand.white",
              color: "brand.magenta",
            }}
            _focus={{
              backgroundColor: "brand.white",
              color: "brand.magenta",
            }}
          >
            Go Back
          </Button>
        </Flex>
      </Flex>
      <Flex flex="1" flexDir="column" h="90vh" p="40px 40px 40px 20px">
        <Heading color="brand.white" marginLeft="10px" text="Status" />
        <EditJobDropdown name="status" register={register} />
        <Heading color="brand.white" marginLeft="10px" text="Notes" />
        <Box
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="15px"
          flex="1"
          overflow="scroll"
          mt="15px"
          p="15px"
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vel quam tempor, varius dui congue, ultricies nulla. In
            porta iaculis ligula a ullamcorper. Integer gravida sapien ut dictum
            interdum. Nullam sed lectus sed urna tristique tristique at nec
            tortor. Sed nisl magna, rhoncus vitae magna in, congue pellentesque
            odio. Morbi ut elit sollicitudin, ultricies est eget, accumsan
            libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vel quam tempor, varius dui congue, ultricies nulla. In
            porta iaculis ligula a ullamcorper. Integer gravida sapien ut dictum
            interdum. Nullam sed lectus sed urna tristique tristique at nec
            tortor. Sed nisl magna, rhoncus vitae magna in, congue pellentesque
            odio. Morbi ut elit sollicitudin, ultricies est eget, accumsan
            libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vel quam tempor, varius dui congue, ultricies nulla. In
            porta iaculis ligula a ullamcorper. Integer gravida sapien ut dictum
            interdum. Nullam sed lectus sed urna tristique tristique at nec
            tortor. Sed nisl magna, rhoncus vitae magna in, congue pellentesque
            odio. Morbi ut elit sollicitudin, ultricies est eget, accumsan
            libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vel quam tempor, varius dui congue, ultricies nulla. In
            porta iaculis ligula a ullamcorper. Integer gravida sapien ut dictum
            interdum. Nullam sed lectus sed urna tristique tristique at nec
            tortor. Sed nisl magna, rhoncus vitae magna in, congue pellentesque
            odio. Morbi ut elit sollicitudin, ultricies est eget, accumsan
            libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vel quam tempor, varius dui congue, ultricies nulla. In
            porta iaculis ligula a ullamcorper. Integer gravida sapien ut dictum
            interdum. Nullam sed lectus sed urna tristique tristique at nec
            tortor. Sed nisl magna, rhoncus vitae magna in, congue pellentesque
            odio. Morbi ut elit sollicitudin, ultricies est eget, accumsan
            libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vel quam tempor, varius dui congue, ultricies nulla. In
            porta iaculis ligula a ullamcorper. Integer gravida sapien ut dictum
            interdum. Nullam sed lectus sed urna tristique tristique at nec
            tortor. Sed nisl magna, rhoncus vitae magna in, congue pellentesque
            odio. Morbi ut elit sollicitudin, ultricies est eget, accumsan
            libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vel quam tempor, varius dui congue, ultricies nulla. In
            porta iaculis ligula a ullamcorper. Integer gravida sapien ut dictum
            interdum. Nullam sed lectus sed urna tristique tristique at nec
            tortor. Sed nisl magna, rhoncus vitae magna in, congue pellentesque
            odio. Morbi ut elit sollicitudin, ultricies est eget, accumsan
            libero.
          </Text>
        </Box>
        <Flex flexDir="row-reverse" mt="30px">
          <Button
            background="linear-gradient(90deg, #6E3AFF 0%, #F009FE 100%)"
            borderRadius="65px"
            color="brand.white"
            h="40px"
            mr="10px"
            w="100px"
            _hover={{
              background: "linear-gradient(90deg, #D509FB 0%, #F009FE 100%)",
            }}
            _focus={{
              background: "linear-gradient(90deg, #D509FB 0%, #F009FE 100%);",
            }}
          >
            Save
          </Button>
          <Button
            onClick={onClose}
            backgroundColor="brand.white"
            borderRadius="65px"
            color="brand.ultramarine"
            h="40px"
            mr="10px"
            w="100px"
            _hover={{
              backgroundColor: "brand.white",
              color: "brand.magenta",
            }}
            _focus={{
              backgroundColor: "brand.white",
              color: "brand.magenta",
            }}
          >
            Delete
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EditJobForm;

import { Flex } from "@chakra-ui/react";
import { Skill } from "@prisma/client";

type EditJobSkillsProps = {
  skills: Skill[];
};

const EditJobSkills = ({ skills }: EditJobSkillsProps) => {
  return (
    <Flex
      alignItems="center"
      backgroundColor="rgba(255, 255, 255, 0.1)"
      border="none"
      borderRadius="65px"
      color="brand.white"
      minH="40px"
      m="10px 0 30px 0"
      padding="0 16px"
    >
      {skills.map((skill) => {
        const { id, name } = skill;
        return (
          <Flex
            key={id}
            alignItems="center"
            h="20px"
            background="#FFF"
            borderRadius="30px"
            color="brand.ultramarine"
            fontSize=".75rem"
            justifyContent="center"
            letterSpacing="1px"
            mr="10px"
            p="0 10px"
            textTransform="uppercase"
          >
            {name}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default EditJobSkills;

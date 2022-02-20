import { Flex } from "@chakra-ui/react";
import { Skill } from "@prisma/client";
import Heading from "./Heading";

type SkillsProps = {
  skills: Skill[];
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <Flex flexDir="column" mt="20px">
      <Heading text="Skills" />
      <Flex mt="10px">
        {skills.map((skill, index) => {
          const marginLeft = index === 0 ? 0 : "5px";

          return (
            <Flex
              key={skill.id}
              alignItems="center"
              as="span"
              backgroundColor="#fff"
              borderRadius="30px"
              color="brand.ultramarine"
              fontSize=".75rem"
              justifyContent="center"
              h="20px"
              marginLeft={marginLeft}
              minW="85px"
              textAlign="center"
              textTransform="uppercase"
            >
              {skill.name}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Skills;

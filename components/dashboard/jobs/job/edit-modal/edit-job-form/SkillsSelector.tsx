import { Flex, Input } from "@chakra-ui/react";
import { ChangeEvent, KeyboardEvent, useState } from "react";

type SkillsSelectorProps = {
  newSkills: string[];
  onAddSkill: (newSkill: string) => void;
};

const SkillsSelector = ({ newSkills, onAddSkill }: SkillsSelectorProps) => {
  const [newSkill, setNewSkill] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewSkill(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setNewSkill("");
      onAddSkill(newSkill);
    }
  };

  return (
    <Flex
      backgroundColor="rgba(255, 255, 255, 0.1)"
      border="1px solid rgba(255, 255, 255, 0)"
      borderRadius="15px"
      color="brand.white"
      cursor="default"
      flexWrap="wrap"
      h="80px"
      minH="80px"
      maxW="100%"
      m="10px 0 30px 0"
      overflow="auto"
      padding="8px 16px"
      _focusWithin={{
        border: "1px solid white",
      }}
    >
      <>
        {newSkills.map((skill) => {
          return (
            <Flex
              key={skill}
              alignItems="center"
              background="#FFF"
              borderRadius="30px"
              color="brand.ultramarine"
              fontSize=".75rem"
              h="20px"
              justifyContent="center"
              letterSpacing="1px"
              m="5px 10px 5px 0"
              p="0 10px"
              textTransform="uppercase"
            >
              {skill}
            </Flex>
          );
        })}
        <Input
          background="none"
          border="none"
          flex="20px 1 0"
          fontSize=".75rem"
          h="20px"
          letterSpacing="1px"
          m="5px 0"
          p="0"
          textTransform="uppercase"
          value={newSkill}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          _focus={{
            outline: "none",
          }}
        />
      </>
    </Flex>
  );
};

export default SkillsSelector;

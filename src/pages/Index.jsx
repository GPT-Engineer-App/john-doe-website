// Personal website for John Doe
import { Box, Flex, Text, Image, Link, VStack, Heading, Button } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto" p={5}>
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Heading fontSize="xl" mb={4}>
          John Doe
        </Heading>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1713238392341-92fb2cdc12de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMG1hbnxlbnwwfHx8fDE3MTM3NjE5MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Doe" mb={4} />
        <Text mb={4}>Hi, I'm John Doe, a passionate software developer with a focus on modern web technologies. I love building scalable and efficient applications that solve real-world problems.</Text>
        <VStack spacing={3} align="stretch">
          <Button leftIcon={<FaLinkedin />} colorScheme="blue">
            <Link href="https://www.linkedin.com/in/johndoe" isExternal>
              LinkedIn
            </Link>
          </Button>
          <Button leftIcon={<FaGithub />} colorScheme="gray">
            <Link href="https://github.com/johndoe" isExternal>
              GitHub
            </Link>
          </Button>
          <Button leftIcon={<FaEnvelope />} colorScheme="teal">
            <Link href="mailto:johndoe@example.com">Email Me</Link>
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;

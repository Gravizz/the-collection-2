import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Link,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      p={10}
      align="center"
      justify="center"
    >
      {/* Left Profile Card */}
      <Box
        bg="gray.50"
        p={8}
        borderRadius="md"
        shadow="md"
        w={{ base: '100%', md: '30%' }}
        textAlign="center"
        mb={{ base: 10, md: 0 }}
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/images/pic-1.jpg"
          alt="Profile Image"
          mx="auto"
          h={'auto'}
          mb={6}
        />
        <Heading size="lg" mb={2}>
          Preechapong Khanmajan
        </Heading>
        <Text fontSize="md" color="gray.500" mb={6}>
          Software Developer
        </Text>
        {/* <Flex justify="center" gap={4}>
          <Link href="#" isExternal></Link>
          <Link href="#" isExternal></Link>
          <Link href="#" isExternal></Link>
          <Link href="#" isExternal></Link>
        </Flex> */}
      </Box>

      {/* Right Content Section */}
      <Box flex="1" textAlign="center" maxW="600px" pl={{ md: 16 }}>
        <Heading as="h1" size="2xl" mb={6}>
          Hello
        </Heading>
        <Text fontSize="lg" mb={6}>
          Here&apos;s who I am & what I do
        </Text>
        <Stack direction="row" spacing={4} justify="center" mb={6}>
          <Link href="/resume">
            <Button colorScheme="blue" variant="solid">
              Resume
            </Button>
          </Link>
          <Link href="/project">
            <Button variant="outline">Projects</Button>
          </Link>
        </Stack>
        <Text fontSize="md" color="gray.500">
          I&apos;m a keen software developer who loves learning and always
          delivers quality results with genuine enthusiasm. I&apos;m excited
          about contributing to innovative projects.
        </Text>
      </Box>
    </Flex>
  );
}

// src/pages/contact.tsx
import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  Stack,
  Divider,
} from '@chakra-ui/react';

export default function Contact() {
  return (
    <Box p={8} maxW="800px" mx="auto">
      <Heading as="h1" size="2xl" mb={8} textAlign="center" color="blue.700">
        Contact Information
      </Heading>

      <VStack spacing={8} align="stretch">
        {/* Contact Details */}
        <Box
          border="1px"
          borderColor="blue.300"
          borderRadius="lg"
          p={8}
          boxShadow="lg"
          bg="white"
        >
          <Heading as="h2" size="lg" mb={4} color="blue.600">
            Get in Touch
          </Heading>
          <Text fontWeight="bold" color="blue.600">
            Call
          </Text>
          <Text color="gray.700">+66 95-616-3515</Text>
          <Divider my={4} borderColor="blue.200" />
          <Text fontWeight="bold" color="blue.600">
            Email
          </Text>
          <Text color="gray.700">peeke0rr@gmail.com</Text>
        </Box>

        {/* Social Media Links */}
        <Box
          border="1px"
          borderColor="blue.300"
          borderRadius="lg"
          p={8}
          boxShadow="lg"
          bg="white"
        >
          <Heading as="h2" size="lg" mb={4} color="blue.600">
            Follow Me
          </Heading>
          <Stack spacing={4}>
            <Link
              href="https://facebook.com"
              isExternal
              color="blue.500"
              fontWeight="bold"
              _hover={{ textDecoration: 'underline', color: 'blue.600' }}
            >
              Facebook
            </Link>
            <Link
              href="https://linkedin.com"
              isExternal
              color="blue.500"
              fontWeight="bold"
              _hover={{ textDecoration: 'underline', color: 'blue.600' }}
            >
              LinkedIn
            </Link>
            <Link
              href="https://instagram.com"
              isExternal
              color="blue.500"
              fontWeight="bold"
              _hover={{ textDecoration: 'underline', color: 'blue.600' }}
            >
              Instagram
            </Link>
            <Link
              href="https://github.com"
              isExternal
              color="blue.500"
              fontWeight="bold"
              _hover={{ textDecoration: 'underline', color: 'blue.600' }}
            >
              GitHub
            </Link>
          </Stack>
        </Box>
      </VStack>
    </Box>
  );
}

import { Box, Text, Link, VStack, HStack, Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="blue.800"
      color="white"
      py={6}
      px={4}
      textAlign="center"
      width="full"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={6}
      >
        {/* Left Side */}
        <Text mb={{ base: 4, md: 0 }}>
          © {new Date().getFullYear()} by Preechapong Khanmajan.
        </Text>

        {/* Right Side */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <VStack spacing={1}>
            <Text fontWeight="bold">Call</Text>
            <Text>+66 95-616-3515</Text>
          </VStack>
          <VStack spacing={1}>
            <Text fontWeight="bold">Write</Text>
            <Text>peeke0rr@gmail.com</Text>
          </VStack>
          <VStack spacing={1}>
            <Text fontWeight="bold">Follow</Text>
            <HStack spacing={3} justifyContent="center">
              <Link href="https://facebook.com" color="teal.300" isExternal>
                Facebook
              </Link>
              <Link href="https://linkedin.com" color="teal.300" isExternal>
                LinkedIn
              </Link>
              <Link href="https://instagram.com" color="teal.300" isExternal>
                Instagram
              </Link>
              <Link href="https://github.com" color="teal.300" isExternal>
                GitHub
              </Link>
            </HStack>
          </VStack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;

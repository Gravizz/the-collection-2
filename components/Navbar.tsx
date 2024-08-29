import { Box, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <Box
      as="nav"
      width={{ base: 'full', md: '250px' }}
      bg="blue.700"
      color="white"
      p={5}
    >
      <VStack height="full" pt={10} spacing={10} align="center">
        <Link href="/" passHref>
          About me
        </Link>
        <Link href="/resume" passHref>
          Resume
        </Link>
        <Link href="/project" passHref>
          Project
        </Link>
        <Link href="/contact" passHref>
          Contact
        </Link>
      </VStack>
    </Box>
  );
}

export default Navbar;

import {
  Box,
  Heading,
  Text,
  VStack,
  Grid,
  GridItem,
  Button,
  Divider,
  Flex,
  Image,
} from '@chakra-ui/react';

const data = [
  { id: 1, skill: 'HTML', pic: '/icon/html-icon.png' },
  { id: 2, skill: 'JavaScript', pic: '/icon/javascript-icon.png' },
  { id: 3, skill: 'TypeScript', pic: '/icon/typescript-icon.png' },
  { id: 4, skill: 'CSS', pic: '/icon/css-icon.png' },
  { id: 5, skill: 'TailwindCSS', pic: '/icon/tailwind-icon.png' },
  { id: 6, skill: 'Chakra UI', pic: '/icon/chakraui-icon.png' },
  { id: 7, skill: 'React', pic: '/icon/react-icon.png' },
  { id: 8, skill: 'Next.js', pic: '/icon/nextjs-icon.svg' },
  { id: 9, skill: 'MongoDB', pic: '/icon/mongodb-icon.png' },
  { id: 10, skill: 'PostgreSQL', pic: '/icon/postgresql-icon.png' },
  { id: 11, skill: 'Postman', pic: '/icon/postman-icon.png' },
  { id: 12, skill: 'Node.js', pic: '/icon/nodejs-icon.png' },
  { id: 13, skill: 'Git', pic: '/icon/git-icon.png' },
];

export default function Resume() {
  return (
    <Box p={{ base: 4, md: 8 }} maxW="1200px" mx="auto">
      {/* Work Experience Section */}
      <Box
        mb={10}
        border="1px"
        borderColor="blue.300"
        borderRadius="lg"
        p={{ base: 6, md: 8 }}
        boxShadow="lg"
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center" color="blue.700">
          W O R K &nbsp; E X P E R I E N C E
        </Heading>
        <VStack align="start" spacing={6}>
          <Box>
            <Heading as="h3" size="md" color="blue.600">
              Delivery Officer
            </Heading>
            <Text fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }}>
              DEEJING AGRICULTURE 999 CO., LTD.
            </Text>
            <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
              2022 - 2023
            </Text>
            <Text color="gray.700" mt={2} fontSize={{ base: 'sm', md: 'md' }}>
              • Managed delivery of 10 tonnes/day of agricultural supplies to
              100+ farms across 3 provinces
            </Text>
            <Text color="gray.700" fontSize={{ base: 'sm', md: 'md' }}>
              • Replanned journey to reduce delivery time by 15% (customers
              received delivery by 4pm instead of 6pm)
            </Text>
          </Box>
          <Divider my={4} borderColor="blue.200" />
          <Box>
            <Heading as="h3" size="md" color="blue.600">
              Assistant Military Officer
            </Heading>
            <Text fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }}>
              29TH MILITARY DISTRICT
            </Text>
            <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
              2019 - 2020
            </Text>
            <Text color="gray.700" mt={2} fontSize={{ base: 'sm', md: 'md' }}>
              • Planned guard shift allocation for 300 soldiers
            </Text>
            <Text color="gray.700" fontSize={{ base: 'sm', md: 'md' }}>
              • Maintained records of staffing for military force readiness
            </Text>
          </Box>
        </VStack>
      </Box>

      {/* Skills Section */}
      <Box
        mb={10}
        border="1px"
        borderColor="blue.300"
        borderRadius="lg"
        p={{ base: 6, md: 8 }}
        boxShadow="lg"
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center" color="blue.700">
          S K I L L S
        </Heading>
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
          gap={6}
        >
          {data.map((data) => (
            <GridItem key={data.id}>
              <Button
                variant="outline"
                colorScheme="blue"
                width="100%"
                borderRadius="md"
                _hover={{ bg: 'blue.600', color: 'white' }}
                _active={{ bg: 'blue.700', transform: 'scale(0.95)' }}
              >
                <Flex align="center" gap={3}>
                  <Box
                    width={30}
                    height={30}
                    borderRadius="full"
                    overflow="hidden"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="white"
                    border="1px solid"
                    borderColor="blue.300"
                  >
                    <Image src={data.pic} alt={`${data.skill} icon`} />
                  </Box>
                  <Text fontSize={{ base: 'sm', md: 'md' }}> {data.skill}</Text>
                </Flex>
              </Button>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* Education Section */}
      <Box
        mb={10}
        border="1px"
        borderColor="blue.300"
        borderRadius="lg"
        p={{ base: 6, md: 8 }}
        boxShadow="lg"
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center" color="blue.700">
          E D U C A T I O N
        </Heading>
        <VStack align="start" spacing={6}>
          <Box>
            <Heading as="h3" size="md" color="blue.600">
              Full-Stack Software Development
            </Heading>
            <Text fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }}>
              TechUp Coding Bootcamp
            </Text>
            <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
              November 2023 - March 2024
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" color="blue.600">
              Political Science
            </Heading>
            <Text fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }}>
              Ramkhamhaeng University
            </Text>
            <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
              2020 - 2024
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" color="blue.600">
              Computer Engineering
            </Heading>
            <Text fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }}>
              King Mongkut&apos;s Institute of Technology Ladkrabang
            </Text>
            <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
              2014 - 2019 (not graduated)
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" color="blue.600">
              Sciences and Mathematics Program
            </Heading>
            <Text fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }}>
              Sakonraj Wittayanukul
            </Text>
            <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
              2008 - 2014
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

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
import { skillsData } from '@/utils/data';

export default function Resume() {
  return (
    <Box p={{ base: 4, md: 8 }} maxW="full" mx="auto">
      {/* Work Experience Section */}
      <Box
        mb={10}
        border="1px"
        borderColor="blue.300"
        borderRadius="lg"
        p={{ base: 6, md: 8 }}
        boxShadow="lg"
      >
        <Heading
          as="h2"
          size={{ base: 'md', md: 'lg' }}
          mb={6}
          textAlign="center"
          color="blue.700"
        >
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
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }}
          gap={6}
        >
          {skillsData.map((skill) => (
            <GridItem key={skill.id}>
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
                    <Image src={skill.pic} alt={`${skill.name} icon`} />
                  </Box>
                  <Text fontSize={'md'}> {skill.name}</Text>
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

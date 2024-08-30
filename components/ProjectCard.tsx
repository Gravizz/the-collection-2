// src/components/ProjectCard.tsx
import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Tag,
  TagLabel,
  useBreakpointValue,
  Flex,
  Link,
} from '@chakra-ui/react';

interface ProjectCardProps {
  name: string;
  imageUrl: string;
  type: string;
  feature: string;
  tools: string[];
  description: string;
  link: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  imageUrl,
  type,
  feature,
  tools,
  description,
  link,
}) => {
  // Use breakpoint value to adjust image size
  const imageSize = useBreakpointValue({
    base: '150px',
    md: '200px',
    lg: '300px',
  });

  return (
    <Link href={link} isExternal _hover={{ textDecoration: 'none' }}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        boxShadow="md"
        maxW="md"
        width="100%"
        transition="transform 0.2s"
        _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
      >
        {/* Centering the image */}
        <Flex justify="center" mb={4}>
          <Image
            src={imageUrl}
            alt={name}
            boxSize={imageSize}
            objectFit="cover"
            borderRadius="md"
          />
        </Flex>
        <Stack spacing={4}>
          <Heading as="h3" size="lg" fontWeight="semibold">
            {name}
          </Heading>
          <Text
            fontWeight="bold"
            fontSize="sm"
            color={
              type === 'front'
                ? 'blue.500'
                : type === 'back'
                ? 'red.500'
                : 'green.500'
            }
          >
            {type === 'front'
              ? 'Frontend'
              : type === 'back'
              ? 'Backend'
              : 'Full Stack'}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {feature}
          </Text>
          <Stack direction="row" spacing={2} wrap="wrap">
            {tools.map((tool, index) => (
              <Tag key={index} variant="solid" colorScheme="teal" size="sm">
                <TagLabel>{tool}</TagLabel>
              </Tag>
            ))}
          </Stack>
          <Text fontSize="sm" mt={2} color="gray.700">
            {description}
          </Text>
        </Stack>
      </Box>
    </Link>
  );
};

export default ProjectCard;

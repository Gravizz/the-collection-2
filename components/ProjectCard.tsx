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
} from '@chakra-ui/react';

interface ProjectCardProps {
  name: string;
  imageUrl: string;
  type: string;
  feature: string;
  tools: string[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  imageUrl,
  type,
  feature,
  tools,
  description,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      boxShadow="lg"
      maxW="lg"
      width="100%"
    >
      <Image
        src={imageUrl}
        alt={name}
        boxSize="300px"
        objectFit="cover"
        borderRadius="lg"
      />
      <Stack spacing={4} mt={4}>
        <Heading as="h3" size="md">
          {name}
        </Heading>
        <Text
          fontWeight="bold"
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
        <Text>{feature}</Text> {/* แสดง feature */}
        <Stack direction="row" spacing={2}>
          {tools.map((tool, index) => (
            <Tag key={index} variant="solid" colorScheme="teal">
              <TagLabel>{tool}</TagLabel>
            </Tag>
          ))}
        </Stack>
        <Text mt={2}>{description}</Text>
      </Stack>
    </Box>
  );
};

export default ProjectCard;

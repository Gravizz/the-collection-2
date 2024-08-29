'use client';

import React, { useState } from 'react';
import {
  Box,
  Input,
  Select,
  Button,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import ProjectCard from '@/components/ProjectCard';

const mockProjects = [
  {
    name: 'Home Service',
    imageUrl: 'https://via.placeholder.com/300',
    type: 'full',
    feature:
      'Landing Page, Authentication, CRUD, Searching & Filtering, Uploading files',
    tools: [
      'Supabase',
      'Stripe',
      'Node.js',
      'React',
      'Javascript',
      'HTML',
      'TailwindCSS',
    ],
    description:
      'An application that calls a technician to perform home repair services. Home repairs will provide many different services (services) according to categories such as general category, bathroom category, etc.',
  },
  {
    name: 'The Collection',
    imageUrl: 'https://via.placeholder.com/300',
    type: 'front',
    feature: 'Landing Page, Searching & Filtering',
    tools: ['Next.js', 'Typescript', 'HTML', 'Chakra UI'],
    description:
      "A personal project organizer that makes it easy to keep all my projects in one place. Whether I'm working on personal tasks, The Collection helps me track and sort my projects, keeping everything tidy and easy to find so I can reach my goals.",
  },
  {
    name: 'Leave Request System',
    imageUrl: 'https://via.placeholder.com/300',
    type: 'full',
    feature:
      'Landing Page, Searching & Filtering, Leave Request Management, Form Collection',
    tools: ['Node.js', 'React', 'Javascript', 'HTML', 'TailwindCSS', 'MongoDB'],
    description:
      'This application will give you the opportunity to be lazy and chill.',
  },
  {
    name: 'Banking Management',
    imageUrl: 'https://via.placeholder.com/300',
    type: 'full',
    feature:
      'Landing Page, Authentication, CRUD, 3rd Party Connection (Bank Connection and Funds Transfer)',
    tools: [
      'Next.js',
      'TypeScript',
      'Appwrite',
      'Plaid',
      'Dwolla',
      'React Hook',
      'Zod',
      'TailwindCSS',
      'Chart.js',
      'ShadCn',
    ],
    description:
      'A banking app that connects multiple accounts, shows real-time transactions, and enables user-to-user money transfers.',
  },
  {
    name: 'Tourist Attraction',
    imageUrl: 'https://via.placeholder.com/300',
    type: 'front',
    feature: 'Landing Page, Searching & Filtering',
    tools: ['Node.js', 'React', 'Javascript', 'HTML', 'CSS'],
    description:
      'An application designed to help you discover tourist attractions for your vacation, allowing you to search based on keywords, location, signature features.',
  },
  // เพิ่มโปรเจกต์ที่เหลือได้ตามต้องการ
];

const Project = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = mockProjects.filter(
      (project) =>
        project.name.toLowerCase().includes(value) ||
        project.feature.toLowerCase().includes(value) ||
        project.tools.some((tool) => tool.toLowerCase().includes(value))
    );

    if (selectedType) {
      setFilteredProjects(
        filtered.filter((project) => project.type === selectedType)
      );
    } else {
      setFilteredProjects(filtered);
    }
  };

  const handleTypeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedType(value);

    const filtered = mockProjects.filter(
      (project) =>
        project.name.toLowerCase().includes(searchTerm) ||
        project.feature.toLowerCase().includes(searchTerm) ||
        project.tools.some((tool) => tool.toLowerCase().includes(searchTerm))
    );

    if (value) {
      setFilteredProjects(filtered.filter((project) => project.type === value));
    } else {
      setFilteredProjects(filtered);
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedType('');
    setFilteredProjects(mockProjects);
  };

  return (
    <Box p={5}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mb={5}>
        <Input
          placeholder="Search by name, tool, or feature"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Select
          placeholder="Filter by type"
          value={selectedType}
          onChange={handleTypeFilter}
        >
          <option value="front">Frontend</option>
          <option value="back">Backend</option>
          <option value="full">Full Stack</option>
        </Select>
        <Button onClick={handleReset}>Reset</Button>
      </Stack>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            imageUrl={project.imageUrl}
            type={project.type}
            feature={project.feature}
            tools={project.tools}
            description={project.description}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Project;

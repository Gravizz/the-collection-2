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
import { ProjectsData } from '@/utils/data';

const Project = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(ProjectsData);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = ProjectsData.filter(
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

    const filtered = ProjectsData.filter(
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
    setFilteredProjects(ProjectsData);
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
            link={project.link}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Project;

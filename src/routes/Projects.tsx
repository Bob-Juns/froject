import React, { useState, useEffect } from 'react';

import axios, { AxiosError, AxiosResponse } from 'axios';

// styles
import styled from 'styled-components';
import { size, device } from '@styles/SharedStyle';

// components
import Layout from '@components/Layout';
import Card from '@components/shared/Card';
import Badge from '@components/shared/Badge';

interface ProjectDataType {
  _id: string;
  projectId: string;
  title: string;
  description: string;
  badges: string[];
  badgeColors: string[];
  cover: string;
  files: string;
  provided: string[];
  requirement: string[];
}

const Projects = () => {
  const [projectData, setProjectData] = useState<ProjectDataType[]>([]);
  useEffect(() => {
    axios
      .get<ProjectDataType>('/projects')
      .then((response: AxiosResponse) => {
        setProjectData(response.data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, []);
  return (
    <Layout>
      <Container>
        {projectData?.map((item: ProjectDataType) => (
          <Card
            key={item._id}
            id={item.projectId}
            cover={item.cover}
            title={item.title}
            description={item.description}
          >
            {item.badges.map((badge: string, index: number) => (
              <Badge
                key={badge}
                badgeColor={item.badgeColors[index]}
                text={badge}
              />
            ))}
          </Card>
        ))}
      </Container>
    </Layout>
  );
};

const Container = styled.article`
  width: 100%;

  padding: ${size.medium};

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${size.tiny};
  justify-items: center;
  align-content: center;

  ${device.tablet} {
    padding: ${size.large};
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${size.base};
  }

  ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Projects;

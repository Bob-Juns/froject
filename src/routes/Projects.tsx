import React from 'react';

// styles
import styled from 'styled-components';
import { size, device } from '@styles/SharedStyle';

// components
import Layout from '@components/Layout';
import Card from '@components/shared/Card';

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Card />
        <Card />
        <Card />
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

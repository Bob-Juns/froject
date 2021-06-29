import React from 'react';

// styles
import styled from 'styled-components';
import { size, color, screen, device } from '@styles/SharedStyle';

// components
import Layout from '@components/Layout';

// assets
import MainImg from '@assets/developer.png';

const Home = () => {
  return (
    <Layout>
      <Container>
        <Image src={MainImg} alt="developer with laptop Image" />
        <Hgroup>
          <Title>
            Fro<Gray>ntend Pro</Gray>ject
          </Title>
          <Subtitle>Create your own project with Challenges</Subtitle>
        </Hgroup>
      </Container>
    </Layout>
  );
};

const Container = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${size.huge};
`;
const Image = styled.img`
  width: 80%;

  ${device.tablet} {
    width: 60%;
    max-width: ${screen.tablet};
  }
`;

const Hgroup = styled.hgroup`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const Title = styled.h1`
  color: ${color.green.dark};

  font-size: 2.25rem;
  font-weight: 800;

  ${device.tablet} {
    font-size: 3.75rem;
  }
`;

const Gray = styled.span`
  color: ${color.gray.base};
`;

const Subtitle = styled.h3`
  width: 100%;
  color: ${color.gray.dark};

  font-size: ${size.base};
  font-weight: 600;
  text-align: center;

  ${device.tablet} {
    font-size: ${size.large};
  }
`;

export default Home;

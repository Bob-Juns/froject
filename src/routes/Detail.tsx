import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import axios, { AxiosError, AxiosResponse } from 'axios';

// styles
import styled from 'styled-components';
import { size, color, device } from '@styles/SharedStyle';

// components
import Layout from '@components/Layout';
import Provided from '@components/Provided';
import Requirement from '@components/Requirement';
import GettingStarted from '@components/GettingStarted';

interface ProjectDataType {
  id: string;
  title: string;
  description: string;
  badges: string[];
  badgeColors: string[];
  cover: string;
  files: string;
  provided: string[];
  requirement: string[];
}

const Detail = () => {
  const { id } = useParams<{ id: undefined | string }>();
  const [projectData, setProjectData] = useState<ProjectDataType>();
  const [gettingStartedData, setGettingStartedData] = useState<string[]>();

  useEffect(() => {
    const getProjectData = axios.get(`/projectData/${id}`);
    const getGettingStartedData = axios.get(`/gettingStartedData`);

    axios
      .all([getProjectData, getGettingStartedData])
      .then(
        axios.spread((...responses: AxiosResponse[]) => {
          setProjectData(responses[0].data);
          setGettingStartedData(responses[1].data);
        }),
      )
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, []);

  const onClickDownload = (): void => {
    window.open(projectData.files, '_self');
  };
  return (
    <Layout>
      <Container>
        <Image src={projectData?.cover} alt="calculator image"></Image>
        <Info>
          <Badges>
            <Badge>html</Badge>
            <Badge>css</Badge>
            <Badge>js</Badge>
          </Badges>
          <Title>{projectData?.title}</Title>
          <Desc>{projectData?.description}</Desc>
          <Provided data={projectData?.provided} />
          <Button onClick={onClickDownload}>Download Assets</Button>
        </Info>
        <Body>
          <Requirement data={projectData?.requirement} />
          <GettingStarted data={gettingStartedData} />
        </Body>
      </Container>
    </Layout>
  );
};

const Container = styled.section`
  width: 100%;

  padding: ${size.small};

  display: flex;
  flex-direction: column;
  gap: ${size.base};

  ${device.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Image = styled.img`
  width: 100%;

  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);

  ${device.desktop} {
    width: 45%;
  }
`;

const Badges = styled.ul`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  gap: 6px;

  ${device.desktop} {
    width: 50%;
  }
`;

const Badge = styled.li`
  color: ${color.purple.dark};

  font-size: ${size.tiny};
  font-weight: 600;
  text-transform: uppercase;
`;

const Info = styled.dl`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: ${size.base};

  ${device.desktop} {
    width: 50%;
  }
`;

const Title = styled.dt`
  color: ${color.purple.base};
  font-size: ${size.medium};
  font-weight: 800;

  ${device.desktop} {
    font-size: ${size.large};
  }
`;

const Desc = styled.dd`
  color: ${color.gray.dark};

  font-size: ${size.tiny};
  line-height: 1.2;

  ${device.desktop} {
    font-size: ${size.small};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: ${size.base};

  color: #fff;
  background-color: ${color.green.dark};

  font-size: ${size.tiny};
  font-weight: 700;
  text-transform: uppercase;

  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.article`
  width: 100%;
  margin-top: ${size.medium};

  display: flex;
  flex-direction: column;
  gap: ${size.large};

  ${device.tablet} {
  }

  ${device.desktop} {
    margin-top: ${size.huge};

    flex-direction: row;
    justify-content: space-between;
  }
`;
export default Detail;

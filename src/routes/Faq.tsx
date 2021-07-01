import React, { useState, useEffect } from 'react';

import axios, { AxiosError, AxiosResponse } from 'axios';

// styles
import styled from 'styled-components';
import { size, color, screen, device } from '@styles/SharedStyle';

// components
import Layout from '@components/Layout';
import FaqBox from '@components/FaqBox';
import Loading from '@components/shared/Loading';

// assets
import FaqImg from '@assets/faq.png';

interface FaqDataType {
  _id: string;
  question: string;
  answer: string;
}

const Faq = () => {
  const [faqData, setFaqData] = useState<FaqDataType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<FaqDataType>('/faqs')
      .then((response: AxiosResponse) => {
        setFaqData(response.data);
        setIsLoading(false);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Layout>
      <Container>
        <Image src={FaqImg} alt="developer with question mark" />
        <Wrapper>
          <Title>자주 묻는 질문</Title>
          <Faqs>
            {faqData?.map((item: FaqDataType) => (
              <FaqBox
                key={item._id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </Faqs>
        </Wrapper>
      </Container>
    </Layout>
  );
};

const Container = styled.article`
  width: 100%;
  min-height: 100%;

  padding-top: ${size.navHeight.mobile};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${size.huge};

  ${device.tablet} {
    max-width: ${screen.tablet};
  }

  ${device.desktop} {
    max-width: ${screen.desktop};
  }
`;

const Image = styled.img`
  width: 80%;

  ${device.tablet} {
    width: 60%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: ${size.medium};

  display: flex;
  flex-direction: column;
  gap: ${size.medium};
`;

const Title = styled.h1`
  width: 100%;

  color: ${color.green.dark};

  font-size: ${size.small};
  font-weight: 800;
  text-align: center;

  ${device.tablet} {
    font-size: ${size.medium};
  }
`;

const Faqs = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${size.tiny};

  ${device.tablet} {
    width: 80%;
    max-width: ${screen.tablet};
    margin: 0 auto;
  }
`;

export default Faq;

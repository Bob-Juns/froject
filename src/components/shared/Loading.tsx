import React from 'react';

// styles
import styled from 'styled-components';
import { size } from '@styles/SharedStyle';

// assets
import LoadingImg from '@assets/loading.gif';

const Loading = () => {
  return (
    <Container>
      <Loader src={LoadingImg} alt="Loading gif image"></Loader>
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: #f1f2f3;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.img`
  width: calc(2 * ${size.huge});
`;

export default Loading;

import React from 'react';

// styles
import styled from 'styled-components';

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

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.img`
  width: 100px;
`;

export default Loading;

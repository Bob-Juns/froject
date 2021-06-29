import React from 'react';

import styled from 'styled-components';
import { size, screen, device } from '@styles/SharedStyle';
import Nav from '@components/Nav';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Nav />
      {children}
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 100vh;

  padding-top: ${size.navHeight.mobile};

  ${device.tablet} {
    max-width: ${screen.tablet};

    margin: 0 auto;
    padding-top: ${size.navHeight.tablet};
  }

  ${device.desktop} {
    max-width: ${screen.desktop};
  }
`;

export default Layout;

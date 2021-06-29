import React from 'react';

import styled from 'styled-components';
import { size, device } from '@styles/SharedStyle';

import DetailBody from '@components/shared/DetailBody';

const GettingStarted = () => {
  return (
    <DetailBody title="시작하기">
      <List>
        <Item>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Item>
        <Item>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Item>
        <Item>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Item>
      </List>
    </DetailBody>
  );
};

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Item = styled.li`
  font-size: ${size.tiny};
  line-height: 1.3;
  &:before {
    content: '# ';
  }

  ${device.tablet} {
    font-size: ${size.base};
  }
`;

export default GettingStarted;

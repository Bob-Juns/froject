import React from 'react';

import styled from 'styled-components';
import { size, device } from '@styles/SharedStyle';

import DetailBody from '@components/shared/DetailBody';

interface GettingStartedProps {
  data: string[] | undefined;
}

const GettingStarted = ({ data }: GettingStartedProps) => {
  return (
    <DetailBody title="시작하기">
      <List>
        {data?.map((item: string, index: number) => (
          <Item key={item}>
            {index + 1}. &nbsp;{item}
          </Item>
        ))}
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

  ${device.tablet} {
    font-size: ${size.base};
  }
`;

export default GettingStarted;

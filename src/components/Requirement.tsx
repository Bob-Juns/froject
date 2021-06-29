import React from 'react';

import styled from 'styled-components';
import { size, device } from '@styles/SharedStyle';

import DetailBody from '@components/shared/DetailBody';

interface RequirementProps {
  data: string[] | undefined;
}

const Requirement = ({ data }: RequirementProps) => {
  return (
    <DetailBody title="요구사항">
      <List>
        {data?.map((item: string) => (
          <Item key={item}>{item}</Item>
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
  &:before {
    content: '# ';
  }

  ${device.tablet} {
    font-size: ${size.base};
  }
`;

export default Requirement;

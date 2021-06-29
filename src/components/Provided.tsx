import React from 'react';

// styles
import styled from 'styled-components';
import { size, color } from '@styles/SharedStyle';

// assets
import CheckIcon from '@assets/check.svg';

interface ProvidedProps {
  data: string[] | undefined;
}

const Provided = ({ data }: ProvidedProps) => {
  return (
    <CheckBox>
      <CheckTitle>provided</CheckTitle>
      {data?.map((item: string) => (
        <CheckList key={item}>
          <Check />
          <P>{item}</P>
        </CheckList>
      ))}
    </CheckBox>
  );
};

const CheckBox = styled.dl`
  width: 100%;

  padding: ${size.base};

  border-radius: 6px;
  background-color: ${color.gray.light};
`;

const CheckTitle = styled.dt`
  margin-bottom: ${size.tiny};
  color: ${color.purple.base};

  font-size: ${size.base};
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

const CheckList = styled.dd`
  width: 100%;
  margin-bottom: 8px;

  display: flex;
  gap: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Check = styled(CheckIcon)`
  width: ${size.tiny};
  height: ${size.tiny};
  color: ${color.green.base};
`;

const P = styled.p`
  font-size: ${size.tiny};
`;

export default Provided;

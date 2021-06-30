import React, { useState, useEffect } from 'react';

import axios, { AxiosError, AxiosResponse } from 'axios';

// styles
import styled from 'styled-components';
import { size, device } from '@styles/SharedStyle';

// components
import DetailBody from '@components/shared/DetailBody';

interface GettingStartedDataType {
  _id: string;
  info: string;
}

const GettingStarted = () => {
  const [data, setData] = useState<GettingStartedDataType[]>([]);

  useEffect(() => {
    axios
      .get<GettingStartedDataType>('/information')
      .then((response: AxiosResponse) => {
        setData(response.data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, []);

  return (
    <DetailBody title="시작하기">
      <List>
        {data?.map((item: GettingStartedDataType, index: number) => (
          <Item key={item._id}>
            {index + 1}. &nbsp;{item.info}
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

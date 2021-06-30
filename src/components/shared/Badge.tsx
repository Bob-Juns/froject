import React from 'react';

import styled from 'styled-components';
import { size, device } from '@styles/SharedStyle';

interface BadgeProps {
  badgeColor: string;
  text: string;
}

const Badge = ({ badgeColor, text }: BadgeProps) => {
  return <Item color={badgeColor}>{text}</Item>;
};

const Item = styled.li`
  color: ${(props: { color: string }) => props.color};

  font-size: ${size.tiny};
  font-weight: 600;
  text-transform: uppercase;

  ${device.tablet} {
    font-size: ${size.base};
  }
`;

export default Badge;

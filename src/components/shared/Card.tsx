import React from 'react';
import { Link } from 'react-router-dom';

// styles
import styled from 'styled-components';
import { size, color } from '@styles/SharedStyle';

const Card = () => {
  const dummy =
    'https://firebasestorage.googleapis.com/v0/b/froject-3d063.appspot.com/o/calc.png?alt=media&token=0a2fd694-14bd-4308-a601-68d1b5649f53';
  return (
    <Container>
      <Link to={`/project/calculator`}>
        <Images>
          <Image src={dummy} alt="Calculator image" />
        </Images>
        <Wrapper>
          <Badges>
            <Badge>html</Badge>
            <Badge>css</Badge>
            <Badge>js</Badge>
          </Badges>
          <Info>
            <Title>계산기 (Calculator)</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque incidunt eos harum quia! Beatae pariatur, ipsa nulla
              animi vel tempore quam, quia nostrum qui incidunt quo minus
              aperiam ipsam perferendis!
            </Desc>
          </Info>
        </Wrapper>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const Images = styled.div`
  width: 100%;
  background-color: ${color.gray.light};

  border-radius: 8px 8px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const Image = styled.img`
  width: 80%;
  transition: all ease-in-out 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 120px;
  padding: ${size.tiny};

  border-radius: 0 0 8px 8px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  gap: ${size.tiny};
`;

const Badges = styled.ul`
  width: 100%;

  display: flex;
  gap: 6px;
`;

const Badge = styled.li`
  color: ${color.purple.dark};

  font-size: ${size.tiny};
  font-weight: 600;
  text-transform: uppercase;
`;

const Info = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.dt`
  color: ${color.purple.dark};
  font-size: ${size.medium};
  font-weight: 800;
`;

const Desc = styled.dd`
  color: ${color.gray.dark};
  font-size: ${size.tiny};
  text-align: justify;
  line-height: 1.2;
`;

export default Card;

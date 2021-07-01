import React, { useState } from 'react';

// styles
import styled from 'styled-components';
import { size, color, device } from '@styles/SharedStyle';

// assets
import PlusIcon from '@assets/plus.svg';
import MinusIcon from '@assets/minus.svg';

interface FaqBoxProps {
  question: string;
  answer: string;
}

const FaqBox = ({ question, answer }: FaqBoxProps) => {
  const [answerOpen, setAnswerOpen] = useState<boolean>(false);

  const answerOpenHandler = (): void => {
    setAnswerOpen((prev) => !prev);
  };
  return (
    <Container>
      <Questions onClick={answerOpenHandler}>
        <Question>{question}</Question>
        {answerOpen ? <Minus /> : <Plus />}
      </Questions>
      {answerOpen && <Answer>{answer}</Answer>}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;

  border: 1px solid ${color.gray.base};
  border-radius: 6px;
`;

const Questions = styled.div`
  padding: ${size.tiny};

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  ${device.tablet} {
    padding: ${size.base};
  }
`;

const Question = styled.h1`
  color: ${color.purple.dark};

  font-size: ${size.tiny};
  font-weight: 700;

  ${device.tablet} {
    font-size: ${size.small};
  }
`;

const Plus = styled(PlusIcon)`
  width: ${size.tiny};
  height: ${size.tiny};

  color: ${color.purple.base};

  ${device.tablet} {
    width: ${size.small};
    height: ${size.small};
  }
`;

const Minus = styled(MinusIcon)`
  width: ${size.tiny};
  height: ${size.tiny};

  color: ${color.purple.base};

  ${device.tablet} {
    width: ${size.small};
    height: ${size.small};
  }
`;

const Answer = styled.p`
  padding: ${size.tiny};
  padding-top: 0;

  font-size: ${size.tiny};
  line-height: 1.3;
  text-align: justify;

  ${device.tablet} {
    padding: ${size.base};
    padding-top: 0;

    font-size: ${size.base};
  }
`;

export default FaqBox;

import React, { useState } from 'react';

// styles
import styled from 'styled-components';
import { size, color } from '@styles/SharedStyle';

// assets
import PlusIcon from '@assets/plus.svg';
import MinusIcon from '@assets/minus.svg';

const FaqBox = () => {
	const [answerOpen, setAnswerOpen] = useState<boolean>(false);

	const answerOpenHandler = (): void => {
		setAnswerOpen((prev) => !prev);
	};
	return (
		<Container>
			<Questions onClick={answerOpenHandler}>
				<Question>Lorem Ipsum</Question>
				{answerOpen ? <Minus /> : <Plus />}
			</Questions>
			{answerOpen && (
				<Answer>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea harum
					tempore doloremque eaque eius nemo sunt quisquam eligendi adipisci
					ipsum assumenda dolore placeat deserunt nihil accusantium quam, a quis
					itaque.
				</Answer>
			)}
		</Container>
	);
};

const Container = styled.section`
	width: 100%;

	border: 1px solid ${color.gray.base};
	border-radius: 6px;
`;

const Questions = styled.div`
	padding: ${size.tiny};

	display: flex;
	justify-content: space-between;

	cursor: pointer;
`;

const Question = styled.h1`
	color: ${color.purple.dark};
	font-size: ${size.tiny};
	font-weight: 700;
`;

const Plus = styled(PlusIcon)`
	width: ${size.tiny};
	color: ${color.purple.base};
`;

const Minus = styled(MinusIcon)`
	width: ${size.tiny};
	color: ${color.purple.base};
`;

const Answer = styled.p`
	padding: ${size.tiny};
	padding-top: 0;

	font-size: ${size.tiny};
	line-height: 1.3;
	text-align: justify;
`;

export default FaqBox;

import React from 'react';

// styles
import styled from 'styled-components';
import { size, color } from '@styles/SharedStyle';

type DetailBodyProps = {
	title: string;
	children: React.ReactNode;
};

const DetailBody = ({ title, children }: DetailBodyProps) => {
	return (
		<Container>
			<Title>{title}</Title>
			{children}
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
`;

const Title = styled.h1`
	width: 100%;
	margin-bottom: ${size.tiny};

	color: ${color.purple.dark};

	font-size: ${size.small};
	font-weight: 800;
`;

export default DetailBody;

import React from 'react';

// styles
import styled from 'styled-components';
import { size, color } from '@styles/SharedStyle';

// components
import Layout from '@components/Layout';
import FaqBox from '@components/FaqBox';

// assets
import FaqImg from '@assets/faq.png';

const Faq = () => {
	return (
		<Layout>
			<Container>
				<Image src={FaqImg} alt='developer with question mark' />
				<Wrapper>
					<Title>자주 묻는 질문</Title>
					<Faqs>
						<FaqBox />
						<FaqBox />
						<FaqBox />
					</Faqs>
				</Wrapper>
			</Container>
		</Layout>
	);
};

const Container = styled.article`
	width: 100%;
	min-height: 100%;

	padding-top: ${size.navHeight.mobile};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: ${size.huge};
`;

const Image = styled.img`
	width: 80%;
`;

const Wrapper = styled.div`
	width: 100%;
	padding: ${size.medium};

	display: flex;
	flex-direction: column;
	gap: ${size.medium};
`;

const Title = styled.h1`
	width: 100%;

	color: ${color.green.dark};

	font-size: ${size.small};
	font-weight: 800;
	text-align: center;
`;

const Faqs = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: ${size.tiny};
`;

export default Faq;

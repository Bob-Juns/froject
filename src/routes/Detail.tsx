import React from 'react';

// styles
import styled from 'styled-components';
import { size, color } from '@styles/SharedStyle';

// components
import Layout from '@components/Layout';
import Provided from '@components/Provided';
import Requirement from '@components/Requirement';
import GettingStarted from '@components/GettingStarted';

const Detail = () => {
	const dummy =
		'https://firebasestorage.googleapis.com/v0/b/froject-3d063.appspot.com/o/calc.png?alt=media&token=0a2fd694-14bd-4308-a601-68d1b5649f53';

	const dummyAsset =
		'https://firebasestorage.googleapis.com/v0/b/froject-3d063.appspot.com/o/Calculator.zip?alt=media&token=03dfd69d-c7f3-4cae-a182-aa7609e8d7d5';

	const onClickDownload = (): void => {
		window.open(dummyAsset, '_self');
	};
	return (
		<Layout>
			<Container>
				<Image src={dummy} alt='calculator image'></Image>
				<Info>
					<Badges>
						<Badge>html</Badge>
						<Badge>css</Badge>
						<Badge>js</Badge>
					</Badges>
					<Title>계산기 (Calculator)</Title>
					<Desc>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
						incidunt eos harum quia! Beatae pariatur, ipsa nulla animi vel
						tempore quam, quia nostrum qui incidunt quo minus aperiam ipsam
						perferendis!
					</Desc>
					<Provided />
					<Button onClick={onClickDownload}>Download Assets</Button>
				</Info>
				<Body>
					<Requirement />
					<GettingStarted />
				</Body>
			</Container>
		</Layout>
	);
};

const Container = styled.section`
	width: 100%;

	padding: ${size.small};

	display: flex;
	flex-direction: column;
	gap: ${size.base};
`;

const Image = styled.img`
	width: 100%;

	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

const Badges = styled.ul`
	width: 100%;
	height: fit-content;
	display: flex;
	justify-content: flex-start;
	gap: 6px;
`;

const Badge = styled.li`
	color: ${color.purple.dark};

	font-size: ${size.tiny};
	font-weight: 600;
	text-transform: uppercase;
`;

const Info = styled.dl`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	gap: ${size.base};
`;
const Title = styled.dt`
	color: ${color.purple.base};
	font-size: ${size.medium};
	font-weight: 800;
`;

const Desc = styled.dd`
	color: ${color.gray.dark};

	font-size: ${size.tiny};
	line-height: 1.2;
`;

const Button = styled.button`
	width: 100%;
	padding: ${size.base};

	color: #fff;
	background-color: ${color.green.dark};

	font-size: ${size.tiny};
	font-weight: 700;
	text-transform: uppercase;

	border-radius: 6px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Body = styled.article`
	width: 100%;
	margin-top: ${size.medium};

	display: flex;
	flex-direction: column;
	gap: ${size.large};
`;
export default Detail;

import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { size, color, device } from '@styles/SharedStyle';

type MenuProps = {
	onClick: () => void;
};

const Menu = ({ onClick }: MenuProps) => {
	return (
		<List>
			<Link to='/' onClick={onClick}>
				<Item>Home</Item>
			</Link>
			<Link to='/projects' onClick={onClick}>
				<Item>Projects</Item>
			</Link>
			<Link to='/faq' onClick={onClick}>
				<Item>FAQ</Item>
			</Link>
		</List>
	);
};

const List = styled.ul`
	width: 100%;
	margin-top: ${size.navHeight.mobile};

	background-color: #fff;
	border-top: 1px solid ${color.gray.light};

	display: flex;
	flex-direction: column;

	position: fixed;
	top: 0;
	right: 0;
`;

const Item = styled.li`
	width: 100%;
	padding: ${size.tiny};

	border-bottom: 1px solid ${color.gray.light};

	font-size: ${size.base};
	font-weight: 600;
	text-align: center;

	cursor: pointer;

	&:hover {
		color: #fff;
		background-color: ${color.green.base};
	}
`;

export default Menu;

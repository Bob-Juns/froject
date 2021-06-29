import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// styles
import styled from 'styled-components';
import { size, color, screen, device } from '@styles/SharedStyle';

// components
import Menu from '@components/Menu';

// hooks
import useMedia from '@hooks/useMedia';

// assets
import MenuIcon from '@assets/menu.svg';
import CloseIcon from '@assets/close.svg';

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const focusRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		menuOpen && (document.body.style.overflow = 'hidden');
		!menuOpen && (document.body.style.overflow = 'auto');
	}, [menuOpen]);

	const onClickOutside = (event: any): void => {
		if (focusRef.current && !focusRef.current.contains(event.target)) {
			setMenuOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', onClickOutside, true);
		return () => {
			document.removeEventListener('click', onClickOutside, true);
		};
	}, [focusRef]);

	const onClickMenu = (): void => {
		setMenuOpen((prev) => !prev);
	};

	return (
		<Container>
			<Link to='/'>
				<Logo>Froject</Logo>
			</Link>
			<Menus ref={focusRef}>
				{!menuOpen ? (
					<Hamburger onClick={onClickMenu} />
				) : (
					<Close onClick={onClickMenu} />
				)}
				{menuOpen && <Menu onClick={onClickMenu} />}
			</Menus>
		</Container>
	);
};

const Container = styled.nav`
	width: 100%;
	height: ${size.navHeight.mobile};

	padding: ${size.medium};

	background-color: #fff;

	display: flex;
	justify-content: space-between;
	align-items: center;

	position: fixed;
	top: 0;
	left: 0;

	z-index: 5;
`;

const Logo = styled.h1`
	color: ${color.green.dark};
	font-size: ${size.medium};
	font-weight: 700;
`;

const Menus = styled.div`
	display: block;
`;

const Hamburger = styled(MenuIcon)`
	width: ${size.base};
	color: ${color.green.dark};

	cursor: pointer;
`;

const Close = styled(CloseIcon)`
	width: ${size.base};
	color: ${color.green.dark};

	cursor: pointer;
`;
export default Nav;

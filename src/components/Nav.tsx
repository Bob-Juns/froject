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
  const isDesktop = useMedia(`(min-width: ${screen.desktop})`);

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
      <Link to="/">
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
      {isDesktop && <Menu onClick={(): void => {}} />}
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

  ${device.tablet} {
    padding: ${size.large};
    height: ${size.navHeight.tablet};
  }

  ${device.desktop} {
    max-width: ${screen.desktop};
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Logo = styled.h1`
  color: ${color.green.dark};
  font-size: ${size.medium};
  font-weight: 700;

  ${device.tablet} {
    font-size: ${size.large};
  }
`;

const Menus = styled.div`
  display: block;

  ${device.desktop} {
    display: none;
  }
`;

const Hamburger = styled(MenuIcon)`
  width: ${size.base};
  height: ${size.base};
  color: ${color.green.dark};

  cursor: pointer;

  ${device.tablet} {
    width: ${size.large};
    height: ${size.large};
  }
`;

const Close = styled(CloseIcon)`
  width: ${size.base};
  height: ${size.base};
  color: ${color.green.dark};

  cursor: pointer;

  ${device.tablet} {
    width: ${size.large};
    height: ${size.large};
  }
`;
export default Nav;

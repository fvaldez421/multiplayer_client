import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserSettings from './UserSettings';

const NavContainer = styled.div`
	height: 58px;
	width: 100%;
	background-color: #000000;
	* {
		color: #ffffff;
	}
`;

const NavWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
`;

const Logo = styled.div`
	padding: 0 20px;
	font-size: 26px;
	line-height: 45px;
	font-weight: 800;
`;

const LinksWrapper = styled.div`
	flex: 8 8;
`;

const NavLink = styled(Link)`
	display: inline-block;
	margin: 0 10px;
	color: #ffffff;
	text-decoration: none;
	font-weight: 600;
	line-height: 43px;
	${({ isActive = false }) =>
		isActive &&
		`
    border-bottom: 2px solid #ffffff;
  `}
	&:hover {
		color: #cccccc;
	}
`;

const StyledUserSettings = styled(UserSettings)`
	width: 200px;
`;

const Navigation = ({ location: { pathname = '' } }) => (
	<NavContainer>
		<NavWrapper>
			<Logo>End of Time</Logo>
			<LinksWrapper>
				<NavLink isActive={pathname === '/home'} to="/home">
					Home
				</NavLink>
				<NavLink isActive={pathname === '/admin'} to="/admin">
					Admin
				</NavLink>
			</LinksWrapper>
			<StyledUserSettings />
		</NavWrapper>
	</NavContainer>
);

export default Navigation;

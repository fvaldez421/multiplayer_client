import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppContentWrapper } from './styleUtils/AppContentWrapper';

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 46px;
  width: 100%;
  background-color: #000000;
  color: #ffffff;
`;

const Logo = styled.div`
  height: 100%;
  width: 200px;
  padding: 0 20px;
  line-height: 45px;
  font-weight: 800;
`;

const NavWrapper = styled(AppContentWrapper)`
  align-self: center;
`;

const UserSettingsWrap = styled.div`
  width: 200px;
`;

const NavLink = styled(Link)`
  display: inline-block;
  margin: 0 10px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  line-height: 44px;
  &:hover {
    background-color: #cccccc;
  }
`;

const Navigation = props => {
  return (
    <NavContainer>
      <Logo>End of Time</Logo>
      <NavWrapper>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </NavWrapper>
      <UserSettingsWrap>
        Login?
      </UserSettingsWrap>
    </NavContainer>
  )
};

export default Navigation;

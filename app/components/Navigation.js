import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  padding: 0 20px;
  font-size: 26px;
  line-height: 45px;
  font-weight: 800;
`;

const NavWrapper = styled.div`
  flex: 8 8;
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
  line-height: 43px;
  ${({ isActive=false }) => isActive && `
    border-bottom: 2px solid #ffffff;
  `}
  &:hover {
    color: #cccccc;
  }
`;


const Navigation = ({ location: { pathname='' } }) => {
  return (
    <NavContainer>
      <Logo>End of Time</Logo>
      <NavWrapper>
        <NavLink isActive={pathname === "/home"} to="/home">Home</NavLink>
        <NavLink isActive={pathname === "/admin"} to="/admin">Admin</NavLink>
      </NavWrapper>
      <UserSettingsWrap>
        Login?
      </UserSettingsWrap>
    </NavContainer>
  )
};

export default Navigation;

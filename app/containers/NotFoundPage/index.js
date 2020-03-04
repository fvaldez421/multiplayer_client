/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  display: block;
  margin: auto;
  > h1 {
    margin: 0;
    padding: 100px 0;
    text-align: center;
  }
  > a {
    display: block;
    margin: auto;
    width: 100px;
    text-align: center;
  }
`;

export default function NotFound() {
  return (
    <MessageWrapper>
      <h1>Couldn't find what you were looking for :(</h1>
      <Link to="/home">Back Home</Link>
    </MessageWrapper>
  );
}

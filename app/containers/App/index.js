/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
`;

export default function App() {
  return (
    <AppWrapper>
      Hello there
      {/* <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet> */}
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}

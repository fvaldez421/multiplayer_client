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
import NotFoundPage from '../NotFoundPage';
import HomePage from '../HomePage';
import AdminPage from '../AdminPage';
import Navigation from '../../components/Navigation';
import makeSelectHomePage from '../HomePage/selectors';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


const AppWrapper = styled.div`
  display: block;
  min-height: 100vh;
  height: 100%;
  width: 100%;
	background-color: lemonchiffon;
`;

const App = props => {
  console.log(props)
  return (
    <AppWrapper>
      <Navigation />
      {/* <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet> */}
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/admin" component={AdminPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
	homePage: makeSelectHomePage()
});

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default compose(withConnect)(App);

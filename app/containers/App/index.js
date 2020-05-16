/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import GlobalStyle from '../../global-styles';
import NotFoundPage from '../NotFoundPage';
import LandingPage from '../LandingPage';
import HomePage from '../HomePage';
import AdminPage from '../AdminPage';
import Navigation from '../../components/Navigation';
import {
	VerifiedRoute,
	AuthedRoute,
	AuthedRedirect,
	UnauthedRoute,
} from '../../components/AuthRoutes';
import makeSelectHomePage from '../HomePage/selectors';
import makeSelectAuth from '../Auth/selectors';
import { restoreSession } from '../Auth/actions';

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
	width: 100%;
	background-color: lemonchiffon;
`;

const App = ({ location = {}, auth = {}, restoreSession }) => {
	useEffect(() => {
		console.log('%ccomponentDidMount!', 'color: yellow;');
		// attempt to restore session here
		restoreSession();
	}, []);

	return (
		<AppWrapper>
			<GlobalStyle />
			<Navigation location={location} />
			<Helmet titleTemplate="%s - End of Time" defaultTitle="End of Time">
				<meta name="description" content="A series of multiplayer games." />
			</Helmet>
			<Switch>
				<UnauthedRoute
					exact
					path="/landing"
					authedPath="/home"
					component={LandingPage}
					auth={auth}
				/>

				<AuthedRoute exact path="/home" component={HomePage} auth={auth} />
				<VerifiedRoute exact path="/admin" component={AdminPage} auth={auth} />

				<AuthedRedirect from="/" authedTo="/home" defaultTo="/landing" />
				<Redirect from="/" to="/landing" />
				<Route path="*" component={NotFoundPage} />
			</Switch>
		</AppWrapper>
	);
};

App.propTypes = {
	location: PropTypes.object,
	auth: PropTypes.object,
	restoreSession: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
	auth: makeSelectAuth(),
	homePage: makeSelectHomePage(),
	location: (state) => state.router.location,
});

const mapDispatchToProps = {
	restoreSession,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(App);

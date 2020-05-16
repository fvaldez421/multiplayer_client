import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * Redirect used to filter out non authed users
 * @param {*} param0
 */
export const AuthedRedirect = ({
	auth: { username, uuid, token } = {},
	from,
	authedTo,
	defaultTo,
}) => {
	if (username && (uuid || token)) {
		return <Redirect from={from} to={authedTo} />;
	}
	return <Redirect from={from} to={defaultTo} />;
};

/**
 * Route to be used for EZ signup (temporary) users
 * @param {*} param0
 */
export const UnauthedRoute = ({
	auth: { username, uuid, token } = {},
	authedPath,
	defaultTo,
	...props
}) => {
	if (!username || !uuid || !token) {
		return <Route {...props} />;
	}
	return <Redirect to={authedPath} />;
};

/**
 * Route to be used for EZ signup (temporary) users
 * @param {*} param0
 */
export const AuthedRoute = ({
	auth: { username, uuid, token } = {},
	...props
}) => {
	if (username && (uuid || token)) {
		return <Route {...props} />;
	}
	return <Redirect to="/landing" />;
};

/**
 * Route to be used for admin and verified account pages
 * @param {*} param0
 */
export const VerifiedRoute = ({
	auth: { username, verified, token } = {},
	...props
}) => {
	if (username && verified && token) {
		return <Route {...props} />;
	}
	return <Redirect to="/landing" />;
};

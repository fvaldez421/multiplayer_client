import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const AuthedRoute = ({ authState: { username }, ...props }) => {
	if (!username) return <Redirect to="/landing" />;
	return <Route {...props} />;
};

export const VerifiedRoute = ({
	authState: { username, verified },
	...props
}) => {
	if (!verified || !username) return <Redirect to="/landing" />;
	return <Route {...props} />;
};

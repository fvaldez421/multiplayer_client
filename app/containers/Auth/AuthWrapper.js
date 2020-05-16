/**
 *
 * Auth
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuth from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
	loginRequest,
	signupRequest,
	restoreSession,
	endSession,
} from './actions';

export function AuthWrapperBase({ WrappedComponent, ...props }) {
	useInjectReducer({ key: 'auth', reducer });
	useInjectSaga({ key: 'auth', saga });
	return <WrappedComponent {...props} />;
}

AuthWrapperBase.propTypes = {
	loginRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
	auth: makeSelectAuth(),
});
const mapDispatchToProps = {
	signupRequest,
	loginRequest,
	restoreSession,
	endSession,
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const AuthWrapper = compose(withConnect)(AuthWrapperBase);

export default AuthWrapper;

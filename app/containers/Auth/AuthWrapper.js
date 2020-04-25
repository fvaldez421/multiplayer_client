/**
 *
 * Auth
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectAuth from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

export function AuthWrapper({ WrappedComponent, ...props }) {
	useInjectReducer({ key: "auth", reducer });
	useInjectSaga({ key: "auth", saga });
	return <WrappedComponent testPropHere {...props} />
}

AuthWrapper.propTypes = {
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
	auth: makeSelectAuth()
});

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AuthWrapper);

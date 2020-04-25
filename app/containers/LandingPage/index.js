/**
 *
 * LandingPage
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectLandingPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import styled from "styled-components";

const PageWrapper = styled.div`

`;

export function LandingPage() {
	useInjectReducer({ key: "landingPage", reducer });
	useInjectSaga({ key: "landingPage", saga });
	return (
		<PageWrapper>
			<Helmet>
				<title>Welcome</title>
				<meta name="description" content="Description of LandingPage" />
			</Helmet>

		</PageWrapper>
	);
}

LandingPage.propTypes = {
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
	landingPage: makeSelectLandingPage()
});

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LandingPage);

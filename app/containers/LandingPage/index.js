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
import styled from "styled-components";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectLandingPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import AuthForm from "./AuthForm";
import { PageWrapper as BaseWrapper, ResponsiveWrapper } from "../../components/styleUtils/Wrappers";
import desertImage from '../../assets/desert-ground-bg.jpg';


const PageWrapper = styled(BaseWrapper)`
	background-image: url(${desertImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

const WelcomeBanner = styled.div`
	display: block;
	margin: 10vh 0 6vh;
	> h1 {
		padding: 0;
	}
	> p {
		margin: 0;
		font-size: 16px;
	}
`;

export function LandingPage() {
	useInjectReducer({ key: "landingPage", reducer });
	useInjectSaga({ key: "landingPage", saga });

	const onSubmit = () => {
		console.log('')
	}

	return (
		<PageWrapper>
			<ResponsiveWrapper>
				<Helmet>
					<title>Welcome</title>
					<meta name="description" content="Description of LandingPage" />
				</Helmet>

				<WelcomeBanner>
					<h1>Welcome to End of Time</h1>
					<p>
						This is a multiplayer gaming platform where you can create lobbies, 
						invite your friends and play together!
					</p>
				</WelcomeBanner>
				
				<AuthForm />
			
			</ResponsiveWrapper>
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

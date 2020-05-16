import React from 'react';
import styled from 'styled-components';

import AuthWrapper from '../containers/Auth';
import { PrimaryButton } from './Buttons';

const SettingsDropdown = styled.div``;

const UserSettings = ({
	className,
	auth: { username, uuid, token },
	endSession,
}) => {
	const loggedIn = username && (uuid || token);

	return (
		<SettingsDropdown className={className}>
			{loggedIn && <PrimaryButton onClick={endSession}>Logout</PrimaryButton>}
		</SettingsDropdown>
	);
};

const WrappedUserSettings = (props) => (
	<AuthWrapper WrappedComponent={UserSettings} {...props} />
);

export default WrappedUserSettings;

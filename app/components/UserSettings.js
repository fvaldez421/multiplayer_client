import React from 'react';
import styled from 'styled-components';

import AuthWrapper from '../containers/Auth';

const SettingsDropdown = styled.div``;

const UserSettings = ({ className }) => (
	<SettingsDropdown className={className}></SettingsDropdown>
);

const WrappedUserSettings = (props) => (
	<AuthWrapper WrappedComponent={UserSettings} {...props} />
);

export default WrappedUserSettings;

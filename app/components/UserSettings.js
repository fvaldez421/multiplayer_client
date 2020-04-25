import React from 'react'
import styled from 'styled-components';

import AuthWrapper from '../containers/Auth'

const SettingsDropdown = styled.div`

`;


const UserSettings = ({ className, ...props }) => {
  console.log({props})
  return (
    <SettingsDropdown className={className} >

    </SettingsDropdown>
  )
}

const WrappedUserSettings = props => <AuthWrapper WrappedComponent={UserSettings} {...props} />

export default WrappedUserSettings
/**
 *
 * AdminPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAdminPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadLobbiesRequest } from './actions';



export function AdminPage(props) {
  useInjectReducer({ key: 'adminPage', reducer });
  useInjectSaga({ key: 'adminPage', saga });
  const onClick = () => {
    props.loadLobbiesRequest({ lobbyType: 'risk' })
  }
  return (
    <div>
      This is the admin page to view and manage lobbies
      <button onClick={onClick}>Test Me</button>
    </div>
  );
}

AdminPage.propTypes = {
  loadLobbiesRequest: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  adminPage: makeSelectAdminPage(),
});

const mapDispatchToProps = {
  loadLobbiesRequest
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(AdminPage);

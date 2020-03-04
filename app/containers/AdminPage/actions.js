/*
 *
 * AdminPage actions
 *
 */

import { DEFAULT_ACTION, ADMIN_LOAD_LOBBIES_REQUEST, ADMIN_LOAD_LOBBIES_RESPONSE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadLobbiesRequest(params) {
  return {
    type: ADMIN_LOAD_LOBBIES_REQUEST,
    ...params
  }
}

export function loadLobbiesResponse(res) {
  return {
    type: ADMIN_LOAD_LOBBIES_RESPONSE,
    ...res
  }
}


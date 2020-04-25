import BaseApi from './BaseApi'

/**
 * LobbyApi - This will be used to make requests to the Lobby Server. It has 
 * special methods for managing connection statys and to update the IP 
 * address or hostname if necessary.
 */
class LobbyApi extends BaseApi {
  constructor(hostname) {
    super(hostname)
    this.setHostname = this.setHostname.bind(this)
  }
  setHostname(hostname) {
    this.hostname = hostname
  }
}


export default new LobbyApi()
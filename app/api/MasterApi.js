import { MASTER_API_HOSTNAME } from './index';
import BaseApi from './BaseApi'


class MasterApi extends BaseApi {
  constructor(hostname) {
    super(hostname)
  }
}


export default new MasterApi(MASTER_API_HOSTNAME)
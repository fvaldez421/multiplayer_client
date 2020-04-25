const { env: { NODE_ENV = 'development' } = {} } = process || {};
let API_HOSTNAME = 'http://localhost:8080';

if (NODE_ENV === 'production') {
  API_HOSTNAME = 'my test site'
}

export {
  API_HOSTNAME,
  API_HOSTNAME as MASTER_API_HOSTNAME
}
export default API_HOSTNAME
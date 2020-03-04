
const { env: { NODE_ENV = 'development' } = {} } = process || {};
let API_HOSTNAME = 'http://localhost:8080';

if (NODE_ENV === 'production') {
  API_HOSTNAME = 'my test site'
}

console.log({ NODE_ENV, API_HOSTNAME })
export {
  API_HOSTNAME
}
export default API_HOSTNAME
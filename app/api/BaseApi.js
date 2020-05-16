import axios from 'axios';

/**
 * BaseApi class
 */
class BaseApi {
	constructor(hostname) {
		this.hostname = hostname;
		this.get = this.get.bind(this);
		this.put = this.put.bind(this);
		this.post = this.post.bind(this);
		this.delete = this.delete.bind(this);
	}

	/**
	 * Standard GET request
	 * @param {String} urlPath
	 */
	async get(urlPath) {
		if (!this.hostname) console.error(`[BaseApi Error]: no hostname provided`);
		try {
			return await axios.get(`${this.hostname}/api${urlPath}`);
		} catch (e) {
			console.error(`[BaseApi Error]: ${e}`);
			return {};
		}
	}

	/**
	 * Standard PUT request
	 * @param {String} urlPath
	 * @param {Object} [body]
	 */
	async put(urlPath, body = {}) {
		if (!this.hostname) console.error(`[BaseApi Error]: no hostname provided`);
		try {
			return await axios.put(`${this.hostname}/api${urlPath}`, body);
		} catch (e) {
			console.error(`[BaseApi Error]: ${e}`);
			return {};
		}
	}

	/**
	 * Standard POST request
	 * @param {String} urlPath
	 * @param {Object} [body]
	 */
	async post(urlPath, body = {}) {
		if (!this.hostname) console.error(`[BaseApi Error]: no hostname provided`);
		try {
			return await axios.post(`${this.hostname}/api${urlPath}`, body);
		} catch (e) {
			console.error(`[BaseApi Error]: ${e}`);
			return {};
		}
	}

	/**
	 * Standard DELETE request
	 * @param {String} urlPath
	 */
	async delete(urlPath) {
		if (!this.hostname) console.error(`[BaseApi Error]: no hostname provided`);
		try {
			return await axios.delete(`${this.hostname}/api${urlPath}`);
		} catch (e) {
			console.error(`[BaseApi Error]: ${e}`);
			return {};
		}
	}
}

export default BaseApi;

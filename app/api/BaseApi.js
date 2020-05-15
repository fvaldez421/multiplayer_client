import axios from 'axios';
import { put } from 'redux-saga/effects';

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
	 * @param {Function} success
	 * @param {Function} [error]
	 */
	*get(urlPath, success = (_) => _, error = (_) => _) {
		if (!this.hostname) console.error(`[BaseApi Error]: no hostname provided`);
		try {
			const res = yield axios.get(`${this.hostname}/api${urlPath}`);
			if (!res.status || res.status === 200) yield put(success(res));
			yield put(error(res));
			return res;
		} catch (e) {
			console.error(`[BaseApi Error]: ${e}`);
			return {};
		}
	}

	/**
	 * Standard PUT request
	 * @param {String} urlPath
	 * @param {Object} [body]
	 * @param {Function} success
	 * @param {Function} [error]
	 */
	*put(urlPath, body = {}, success = (_) => _, error = (_) => _) {
		if (!this.hostname) console.error(`[BaseApi Error]: no hostname provided`);
		try {
			const res = yield axios.put(`${this.hostname}/api${urlPath}`, body);
			if (!res.status || res.status === 200) yield put(success(res));
			yield put(error(res));
			return res;
		} catch (e) {
			console.error(`[BaseApi Error]: ${e}`);
			return {};
		}
	}

	/**
	 * Standard POST request
	 * @param {String} urlPath
	 * @param {Object} [body]
	 * @param {Function} success
	 * @param {Function} [error]
	 */
	*post(urlPath, body = {}, success = (_) => _, error = (_) => _) {
		if (!this.hostname) console.error(`[BaseApi Error]: no hostname provided`);
		try {
			const res = yield axios.post(`${this.hostname}/api${urlPath}`, body);
			if (!res.status || res.status === 200) yield put(success(res));
			yield put(error(res));
			return res;
		} catch (e) {
			console.error(`[BaseApi Error]: ${e}`);
			return {};
		}
	}

	/**
	 * Standard DELETE request
	 * @param {String} urlPath
	 * @param {Function} success
	 * @param {Function} [error]
	 */
	*delete(urlPath, success = (_) => _, error = (_) => _) {
		if (!this.hostname) console.error(`[BaseApi Error]: no hostname provided`);
		try {
			const res = yield axios.delete(`${this.hostname}/api${urlPath}`);
			if (!res.status || res.status === 200) yield put(success(res));
			yield put(error(res));
			return res;
		} catch (e) {
			console.error(`[BaseApi Error]: ${e}`);
			return {};
		}
	}
}

export default BaseApi;

const APP_DOMAIN = 'EOT/';

const makeKey = (key) => `${APP_DOMAIN}${key}`;
if (window && !window.Storage) window.Storage = {};

export const setItem = (key, value) => {
	const storageKey = makeKey(key);
	const strVal = JSON.stringify(value);
	localStorage.setItem(storageKey, strVal);
};

export const getItem = (key) => {
	const storageKey = makeKey(key);
	const value = localStorage.getItem(storageKey);
	return value ? JSON.parse(value) : null;
};

export const removeItem = (key) => {
	const storageKey = makeKey(key);
	localStorage.removeItem(storageKey);
};

export const setAuth = (params = {}) => {
	setItem('auth', { ...params });
};

export const getAuth = () => getItem('auth') || {};

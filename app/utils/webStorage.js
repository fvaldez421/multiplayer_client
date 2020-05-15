if (window && !window.Storage) window.Storage = {};

export const setItem = (key, value) => {
	const strVal = JSON.stringify(value);
	localStorage.setItem(key, strVal);
};

export const getItem = (key) => {
	const value = localStorage.getItem(key);
	return value ? JSON.parse(value) : null;
};

export const removeItem = (key) => localStorage.removeItem(key);

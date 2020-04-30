import { useState } from 'react';

const useComplexState = (initialState = null, onUpdate) => {
	const [state, updateState] = useState({ ...initialState });
	const setState = (updates) => {
		let updatedState = state;
		updateState((stale) => {
			updatedState = { ...stale, ...updates };
			return updatedState;
		});
		if (typeof onUpdate === 'function') onUpdate(updatedState);
		return updatedState;
	};
	return {
		state,
		setState,
	};
};

export default useComplexState;

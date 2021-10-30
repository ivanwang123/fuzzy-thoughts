import { onAuthStateChanged } from 'firebase/auth';
import { writable } from 'svelte/store';
import { auth } from '../firebase';

function checkAuthentication() {
	const { subscribe, set } = writable(false);

	onAuthStateChanged(auth, (user) => {
		if (user) set(true);
		else set(false);
	});

	return {
		subscribe
	};
}

export const isAuthenticated = checkAuthentication();

import { initializeApp } from 'firebase/app';

// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBFs_KBhFEDS2kqS9mtcJAxmKsr6OiVZq0',
	authDomain: 'fuzzy-thoughts.firebaseapp.com',
	projectId: 'fuzzy-thoughts',
	storageBucket: 'fuzzy-thoughts.appspot.com',
	messagingSenderId: '560407835794',
	appId: '1:560407835794:web:4d792b4adb3f2227b8624b',
	measurementId: 'G-43WGCT0XRS'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

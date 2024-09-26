import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDgKve7RAolNF-VmIqjOAKixV1iMKSGbmE",
    authDomain: "gitfirebase-9e5a9.firebaseapp.com",
    projectId: "gitfirebase-9e5a9",
    storageBucket: "gitfirebase-9e5a9.appspot.com",
    messagingSenderId: "380631965327",
    appId: "1:380631965327:web:964414c77ea607fbe81afa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
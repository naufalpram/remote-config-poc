'use client'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getRemoteConfig, fetchAndActivate, getValue } from "firebase/remote-config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

let remoteConfig = null;

// Initialize Firebase
const initializeRemoteConfig = () => {
    if (typeof window === 'undefined') throw new Error('Remote config can only be used in client for this setup');

    if (!remoteConfig) {
        const app = initializeApp(firebaseConfig);
        remoteConfig = getRemoteConfig(app);
        
        remoteConfig.settings = {
            minimumFetchIntervalMillis: 0,
            fetchTimeoutMillis: 60_000
        };
    }

    return remoteConfig;
};

export const fetchRemoteConfig = async () => {
    try {
        const remoteConfig = initializeRemoteConfig();
        if (!remoteConfig) throw new Error('Remote Config initialization failed');
    
        await fetchAndActivate(remoteConfig);
        return remoteConfig;
    } catch(error) {
        console.error('Remote Config fetch failed', error);
        return remoteConfig; // use default values if error
    }
};

export const getConfigValue = (key) => {
    const remoteConfig = initializeRemoteConfig();
    const value = getValue(remoteConfig, key);
    return {
        asString: () => value.asString(),
        asBoolean: () => value.asBoolean(),
        asNumber: () => value.asNumber()
    };
};

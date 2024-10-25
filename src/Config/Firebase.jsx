import { initializeApp } from "firebase/app";
import { getAnalytics,logEvent } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const {VITE_FIREBASE_API_KEY,VITE_FIREBASE_AUTH_DOMAIN,VITE_FIREBASE_PROJECT_ID,VITE_FIREBASE_STORAGE_BUCKET,VITE_FIREBASE_MESSAGING_SENDER_ID,VITE_FIREBASE_APP_ID,VITE_FIREBASE_MEASURMENT_ID} = import.meta.env

const firebaseConfig = {
  apiKey:VITE_FIREBASE_API_KEY,
  authDomain:VITE_FIREBASE_AUTH_DOMAIN,
  projectId:VITE_FIREBASE_PROJECT_ID,
  storageBucket:VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:VITE_FIREBASE_APP_ID,
  measurementId: VITE_FIREBASE_MEASURMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app , analytics , db , logEvent}
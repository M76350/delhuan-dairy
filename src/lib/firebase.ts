// import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };

// const isConfigValid = Object.values(firebaseConfig).every(Boolean);

// export const isFirebaseConfigured = isConfigValid;

// export const firebaseApp: FirebaseApp | null = isConfigValid
//   ? !getApps().length
//     ? initializeApp(firebaseConfig)
//     : getApp()
//   : null;



// Firebase Configuration for Delhuan Village Website
import { initializeApp, getApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDUNn-fYSkBfVwXBvGC5i5hnhdGFGI964s",
  authDomain: "delhuan-village.firebaseapp.com",
  projectId: "delhuan-village",
  storageBucket: "delhuan-village.firebasestorage.app",
  messagingSenderId: "459986199902",
  appId: "1:459986199902:web:2af4cee3486b4a65065bcf",
  measurementId: "G-L908Z2JV3B"
};

// Check if config is valid
const isConfigValid = Object.values(firebaseConfig).every(Boolean);

// Initialize Firebase (avoid multiple initializations)
const app: FirebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (only in browser)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Export for authentication (used in Login.tsx)
export const firebaseApp: FirebaseApp | null = isConfigValid ? app : null;
export const isFirebaseConfigured = isConfigValid;

// Default export
export default app;

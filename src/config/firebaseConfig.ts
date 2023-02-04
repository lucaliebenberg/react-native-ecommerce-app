import AsyncStorage from '@react-native-async-storage/async-storage';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5X17rZK1T53nY1tjQBN7QkmkXPufswHk",
  authDomain: "ecommerce-react-app-de1d2.firebaseapp.com",
  projectId: "ecommerce-react-app-de1d2",
  storageBucket: "ecommerce-react-app-de1d2.appspot.com",
  messagingSenderId: "782588121281",
  appId: "1:782588121281:web:2a4fd5b7e7513cc6600440",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };

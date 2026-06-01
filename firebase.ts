import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ⚠️ Replace these with your Firebase web app config
// Firebase Console → Project Settings → General → Your apps → SDK setup & configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCHyxf1KoerLZKkfs5Yl8csJ249ABxgTTU",
  authDomain: "nour-chain.firebaseapp.com",
  projectId: "nour-chain",
  storageBucket: "nour-chain.firebasestorage.app",
  messagingSenderId: "1069588622412",
  appId: "1:1069588622412:web:fa9059788d9ac683fe98e9",
  measurementId: "G-E6DKG55P9S",
};

// Your Telegram bot username (without @). Used for referral links.
// Bot username (public, safe in frontend). Used for referral links.
export const TELEGRAM_BOT_USERNAME = "NourChainBot";
// Mini App short name registered in BotFather (used for t.me/<bot>/<app> deep links)
export const TELEGRAM_MINIAPP_NAME = "nourchain";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

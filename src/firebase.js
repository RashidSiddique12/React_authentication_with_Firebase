
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDC0ONPIG-oYlmPMyd3Bk1MDIPd6fTyByE",
  authDomain: "auth-development-c6158.firebaseapp.com",
  projectId: "auth-development-c6158",
  storageBucket: "auth-development-c6158.appspot.com",
  messagingSenderId: "546196777897",
  appId: "1:546196777897:web:f9e1811b2e63f02874f2b8"
};


const app = initializeApp(firebaseConfig);

// export app
export default app;
export const auth = app.auth();
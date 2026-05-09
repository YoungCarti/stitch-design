import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDUpl82RjlQFNd1YyGCh5bNaENUOq5QjzU",
  authDomain: "stitch-design-7e975.firebaseapp.com",
  projectId: "stitch-design-7e975",
  storageBucket: "stitch-design-7e975.firebasestorage.app",
  messagingSenderId: "901580263015",
  appId: "1:901580263015:web:3c08752201acf475130ec2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

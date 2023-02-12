import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBXzqX-n5OxCCifCRUT6lAaJc1SLxApowA",
  authDomain: "backendkatys.firebaseapp.com",
  projectId: "backendkatys",
  storageBucket: "backendkatys.appspot.com",
  messagingSenderId: "783618586131",
  appId: "1:783618586131:web:33187ad80ed224b78af1e6"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


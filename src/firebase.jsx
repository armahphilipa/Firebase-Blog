import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 export const db = getFirestore(app);
 const auth = getAuth(app);
 const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider,  signInWithEmailAndPassword, signInWithPopup };
export default app;

/*
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  // Handle Email/Password Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential);
      if(user){
      await setDoc(doc(db,'users',user.uid), {
        email: user.email,
        fullName: user.fname,
      });
     }
      alert('Sign up successful!');
      navigate('/login'); // Navigate to login page after successful sign-up
    } catch (error) {
      console.error('Error signing up:', error);
      alert(error.message);
    }
  };

  // Handle Google Sign Up
  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google sign-up successful:', result);
      alert('Google sign-up successful!');
      navigate('/login');
    } catch (error) {
      console.error('Error with Google sign-up:', error);
      alert(error.message);
    }
  };

 

  const handleSignUp = async (e)=>{
    e.preventDefault();
    try {
     await createUserWithEmailAndPassword(auh, email, password);
     const user = auth.currentUser;
     console.log(user); 
     console.log('Sign up sucessful')
    } catch (error) {
      console.log(error.message);
    }
  }; 
  
  // Handle Email/Password Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential);
      alert('Sign up successful!');
      navigate('/login'); // Navigate to login page after successful sign-up
    } catch (error) {
      console.error('Error signing up:', error);
      alert(error.message);
    }
  };

  // Handle Google Sign Up
  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google sign-up successful:', result);
      alert('Google sign-up successful!');
      navigate('/login');
    } catch (error) {
      console.error('Error with Google sign-up:', error);
      alert(error.message);
    }
  };
  */
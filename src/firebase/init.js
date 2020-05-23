import firebaseapp from 'firebase/app' // adding app to get only what we need (config)
import firestore from 'firebase/firestore' // database
import analytics from 'firebase/analytics' // google analytics

const firebaseConfig = {
  apiKey: "AIzaSyC_bcMd0FZ_az_B5YdOo7t1n1ws5NhMTFE",
  authDomain: "mariz-io.firebaseapp.com",
  databaseURL: "https://mariz-io.firebaseio.com",
  projectId: "mariz-io",
  storageBucket: "mariz-io.appspot.com",
  messagingSenderId: "220836656263",
  appId: "1:220836656263:web:224184ecd4598bc7363422",
  measurementId: "G-CDQESB63VD"
};

const firebaseApp = firebaseapp.initializeApp(firebaseConfig)
firebaseapp.analytics();

// export firebase database
export default firebaseApp.firestore()

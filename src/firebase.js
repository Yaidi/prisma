import firebase from "firebase";

//Here is the configuration of firebase and initit app
const firebaseConfig = {
  apiKey: "AIzaSyAHETGhdnzGcspo7VJzSAwdAvj_hSo_Too",
  authDomain: "prismacoders.firebaseapp.com",
  databaseURL: "https://prismacoders.firebaseio.com",
  projectId: "prismacoders",
  storageBucket: "prismacoders.appspot.com",
  messagingSenderId: "147564529773",
  appId: "1:147564529773:web:1c50175342476b6a275764",
  measurementId: "G-39NE6XGL81",
};
// Initialize Firebase
export default () => {
  firebase.initializeApp(firebaseConfig);
};

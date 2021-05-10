import firebase from '@react-native-firebase/app';

// Your secondary Firebase project credentials...
const credentials = {
  clientId:
    '595990775474-rj14oeo9p75e5ase84r1rsv18geg99fh.apps.googleusercontent.com',
  appId: '1:595990775474:android:7407e85a32243d2f12abab',
  apiKey:
    'BP5M0nZLjQLdMfgcqbleZvngJSAgcnNjW2b0FPdR7JzBBAEqyKBlUEwntrTp5QTNvUVTiZNmWYwNZn9u1MaMw6I',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: '',
  projectId: 'react-native-projekiot',
};

const config = {
  name: 'projekiot',
};

export const firebaseApp = firebase.initializeApp(credentials, config);

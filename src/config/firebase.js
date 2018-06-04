const prodConfig = {
  apiKey: "...",
    authDomain: "...firebaseapp.com",
    databaseURL: "https://...firebaseio.com",
    projectId: "...",
    storageBucket: "...appspot.com",
    messagingSenderId: "...",
};

const devConfig = {
  apiKey: "...",
  authDomain: "...firebaseapp.com",
  databaseURL: "https://...firebaseio.com",
  projectId: "...",
  storageBucket: "...appspot.com",
  messagingSenderId: "...",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

export default config;
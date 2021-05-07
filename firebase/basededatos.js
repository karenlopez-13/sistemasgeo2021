//nos conectamos a la base de datos de firebase
var firebaseConfig = {
    apiKey: "AIzaSyABfBG2XSnFFYaygkQBhsROgMtpiXgLf6U",
    authDomain: "fir-appgeo.firebaseapp.com",
    projectId: "fir-appgeo",
    storageBucket: "fir-appgeo.appspot.com",
    messagingSenderId: "897418238144",
    appId: "1:897418238144:web:9478203274ff456841b525"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
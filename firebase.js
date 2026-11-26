// ==========================================
// VOZ ANGELICAL
// SISTEMA DE GESTIÓN MUSICAL
// CONFIGURACIÓN DE FIREBASE
// ==========================================

// IMPORTAR FIREBASE

import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";


// CONFIGURACIÓN DEL PROYECTO

const firebaseConfig = {

    apiKey: "AIzaSyCLV005ri1RILn9cBLJmPXYvrp1WbKGWgo",

    authDomain: "voz-angelical.firebaseapp.com",

    projectId: "voz-angelical",

    storageBucket: "voz-angelical.firebasestorage.app",

    messagingSenderId: "217682121833",

    appId: "1:217682121833:web:157bca0c793d217c0e7ef8"

};


// INICIALIZAR FIREBASE

const app = initializeApp(firebaseConfig);


// AUTENTICACIÓN

const auth = getAuth(app);


// BASE DE DATOS

const db = getFirestore(app);


// EXPORTAR SERVICIOS

export { app, auth, db };


// MENSAJE DE INICIALIZACIÓN

console.log("Firebase inicializado - Voz Angelical");
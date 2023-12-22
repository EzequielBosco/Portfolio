import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push, set } from 'firebase/database'
import { APIKEY, DATABASEURL } from '../config/index.config.js'

const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: "portfolio-contacto-c3ee7.firebaseapp.com",
    databaseURL: DATABASEURL,
    projectId: "portfolio-contacto-c3ee7",
    storageBucket: "portfolio-contacto-c3ee7.appspot.com",
    messagingSenderId: "798531995796",
    appId: "1:798531995796:web:b8253700a6d9eeec008c81"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export { db, ref, push, set }
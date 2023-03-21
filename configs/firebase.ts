import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCOPZ3XVkz_y-rR0OpEMB3ULyQ7xo-uZYI',
  authDomain: 'mycv-b785a.firebaseapp.com',
  projectId: 'mycv-b785a',
  storageBucket: 'mycv-b785a.appspot.com',
  messagingSenderId: '465217677482',
  appId: '1:465217677482:web:b5283bbee07f6db8a348d3',
  measurementId: 'G-C6NTN6CFTW',
}

initializeApp(firebaseConfig)

const db = getFirestore()

export default db

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCi7iphPdC18vntm-K85WJ37hJ9wye3Rlk',
  authDomain: 'apisbcra.firebaseapp.com',
  projectId: 'apisbcra',
  storageBucket: 'apisbcra.appspot.com',
  messagingSenderId: '220825773448',
  appId: '1:220825773448:web:8c98a74bb9fa815bc6463d',
  measurementId: 'G-MQ6P1VQ8C8',
}
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const dataBase = getFirestore(app)

export { app, analytics, dataBase }

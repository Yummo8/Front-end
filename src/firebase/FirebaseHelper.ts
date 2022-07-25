import {initializeApp} from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  increment,
  setDoc,
  doc,
  DocumentData,
  Timestamp,
  Firestore,
  getDoc,
  DocumentReference,
  DocumentSnapshot,
} from 'firebase/firestore/lite';

export class FirebaseHelper {
  wallet: string;
  db: Firestore;

  constructor(wallet: string, firebaseConfig: any) {
    this.wallet = wallet;
    this.db = getFirestore(initializeApp(firebaseConfig));
    console.log('[FirebaseHelper] db = ' + JSON.stringify(this.db));
  }
}

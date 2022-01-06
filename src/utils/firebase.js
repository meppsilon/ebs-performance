import { v4 as uuidV4 } from 'uuid';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAqLpbJrGslKK7akl8DlhWPvSxF7l9VhNw',
  authDomain: 'ebs-performance.firebaseapp.com',
  databaseURL: 'https://ebs-performance-default-rtdb.firebaseio.com',
  projectId: 'ebs-performance',
  storageBucket: 'ebs-performance.appspot.com',
  messagingSenderId: '628743068872',
  appId: '1:628743068872:web:664402c8fc0dbb05bc19fd',
  measurementId: 'G-J377L7Y4F9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export async function writeBenchPressData(benchPressData) {
  const db = getDatabase(app);
  const id = uuidV4();
  const benchPressListRef = ref(db, `benchPress/${id}`);
  await set(benchPressListRef, {
    ...benchPressData,
    id,
    paid: false,
    created: Date.now(),
  });
}

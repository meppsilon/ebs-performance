import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, update, get } from 'firebase/database';

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
  const benchPressListRef = push(ref(db, 'benchPress'));
  const modifiedBenchPress = {
    ...benchPressData,
    id: benchPressListRef.key,
    paid: false,
    created: Date.now(),
  };
  await set(benchPressListRef, modifiedBenchPress);
  return modifiedBenchPress;
}

export async function updateBenchPressData(bid, updateData) {
  const db = getDatabase(app);
  const benchPressListRef = ref(db, `benchPress/${bid}`);
  await update(benchPressListRef, updateData);
}

export async function getBenchPressData() {
  const db = getDatabase(app);
  const benchPressListRef = ref(db, 'benchPress');
  const snapshot = await get(benchPressListRef);
  console.log(`snapshot`, snapshot)
  return Object.values(snapshot.val());
}

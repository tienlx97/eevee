// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  DocumentData,
  collection,
  CollectionReference,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  limit,
  updateDoc,
  getDoc,
} from 'firebase/firestore';
import type { Post, Author, PostI69n } from 'typings/my-mdx';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDe1IjMhN6xl4GAcfw4fmMTY8w2keIucI4',
  authDomain: 'poro-e8728.firebaseapp.com',
  projectId: 'poro-e8728',
  storageBucket: 'poro-e8728.appspot.com',
  messagingSenderId: '48636361354',
  appId: '1:48636361354:web:8c6362459fa7f2f6e6cb73',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export firestore incase we need to access it directly
export const firestore = getFirestore(app);

// This is just a helper to add the type to the db responses
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

// export all your collections
export const postCol = createCollection<Post>('posts');
export const postI69nCol = createCollection<PostI69n>('posts');
export const authorCol = createCollection<Author>('authors');

// Initialize Firebase Auth
export const auth = getAuth();

export const getAuthor = async (uid: string) => {
  const docRef = doc(authorCol, uid);
  const d = await getDoc(docRef);
  return d.data();
};

export const createAuthorDocument = async (user: any) => {
  const q = query(authorCol, where('uid', '==', user.uid), limit(1));
  const { docs } = await getDocs(q);
  const { uid, displayName, email, photoURL, reloadUserInfo } = user;
  const authorRef = doc(authorCol, uid);

  if (docs.length === 0) {
    const newAuthor = {
      uid,
      email,
      photoURL,
      description: 'Mimikyu is the best website I have known',
      id: -1,
      name: displayName,
      nickName: reloadUserInfo.screenName,
      url: '',
    } as Author;

    await setDoc(authorRef, newAuthor);

    return newAuthor;
  }

  return docs[0].data();
};
